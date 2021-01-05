const configuration = require('../../config.json')
const requestsMonitor = require('../../models/handler')

var test = []

function doJenkins(now)
{
	bjenkins = true
	test.every( (m, i) => {
		if ( (m.x.getFullYear() == now.getFullYear()) &&
		(m.x.getMonth() == now.getMonth()) &&
		(m.x.getDay() == now.getDay())) {
			test[i].y = test[i].y + 1
			bjenkins = false
			return false;
		}
		return true;
	})
	if(bjenkins)
	{
		test.push({
			y : 1,
			x : now
		})
	}
}
module.exports = (app) => {
	app.get('/getMonth', async (req, res, next) => {
		try {
			if (configuration.monitor != "on")
				return
			test = []
			let jenkins = await requestsMonitor.getAll()
			let now
			let today = new Date()
			jenkins.forEach( (e) => {
				now = new Date(e.date)
				if ( (today.getFullYear() == now.getFullYear()) &&
				(today.getMonth() == now.getMonth()))
				{
					if(!test.length) {
						test.push({
							y : 1,
							x : now
						})
					}
					else {
						doJenkins(now)
					}	
				}
			})
			test = test.sort((a, b) => b.x - a.x)
			res.json(test)
		} catch (err) {
			return next(err)
		}
	})
}