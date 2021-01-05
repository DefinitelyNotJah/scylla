const yup = require('yup')
const axios = require('axios')

const configuration = require('../../config.json')
const requestsMonitor = require('../../models/handler')

axios.defaults.headers.get['Accept'] = 'application/json';

// Validation table
const schema = yup.object().shape({
	q : yup.string(),
	start: yup.number(),
	size: yup.number()
})

function getClientIP(req){
    return req.connection.remoteAddress || 
	 req.socket.remoteAddress ||
	 req.connection.socket.remoteAddress ||
	 req.headers['x-forwarded-for'] ||
	 `INVALID`;
}

module.exports = app => {
	app.get('/search', async (req, res, next) => {
		let {
			q,
			start,
			size
		} = req.query
		try {
			// Monitor our shit
			if (configuration.monitor == "on") {
				/*
		 		const monitorUser = new requestsMonitor()
		 		monitorUser.ip = getClientIP(req) // Gets the client's IP address
		 		monitorUser.userAgent = req.headers['user-agent']; // Gets his User-Agent
		 		monitorUser._params.push({
		 			"q" : q,
		 			"size" : size,
		 			"start" : start
		 		}) // Gets the query params he used in the search
		 		monitorUser.save() // Saves it in mongodb
		 		*/
		 		requestsMonitor.AddElement(getClientIP(req), req.headers['user-agent'], req.query)
		 	}
			// Validates our query parameters
			await schema.validate({
				q,
				start,
				size
			})

			if(!start)
				start=0
			if(!size)
				size=50
			
			let _params = {}
			if(q)
			{
				if(q.trim().includes("'"))
					return next(new Error("You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '\'' at line 1" + "<br />" * 70 + "Just kidding, I don't even use SQL. Single quotes will break your query as Lucene query syntax will interpret it literally. Use double quotes to get exact matches."))

				if(!q.includes(':'))
					return next(new Error("You do not appear to be using Solr/Lucene query syntax."))

				let q_lower_list = q.split(':')
				// Better dynamic way of turning the query param into lowercase
				q_lower_list.map( (e, i) => {
					if(i + 1 % 2 != 1)
						return e.toLowerCase()
				}) 
				//console.log(q_lower_list)
				let q_param = q_lower_list.join(':')
				//console.log(q_param)

				_params = {
					"q" : q_param,
					"size" : size,
					"start" : start,
					"q.parser" : "lucene"
				}
			} else {
				_params = {
					"q" : "*:*",
					"size" : size,
					"start" : start,
					"q.parser" : "lucene"
				}
			}

			if(!_params.q.includes(':'))
				return next(new Error("You do not appear to be using Solr/Lucene query syntax."))
			const response = await axios.get(configuration.SEARCH_HOST, {
				params : _params
			})
			//console.log(response.data)
			let json_hits_raw = response.data["hits"]["hit"]
		 	return res.send(json_hits_raw) // Sends the response to the user
		 	//return res.send(response.data)
		} catch (err)
		{
			//console.log(err)
			return next(err)
		}
	})
}
