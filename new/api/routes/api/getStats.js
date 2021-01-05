const configuration = require('../../config.json')
const requestsMonitor = require('../../models/handler')

var test = []

function doJenkins(now)
{
	bjenkins = true
	test.every( (m, i) => {
		if ( (m.x.getFullYear() == now.getFullYear()) &&
		(m.x.getMonth() == now.getMonth()) ) {
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
			x : new Date( now.getFullYear(), now.getMonth() )
		})
	}
}
module.exports = (app) => {
	app.get('/getStats', async (req, res, next) => {
		try {
			if (configuration.monitor != "on")
				return
			test = []
			let jenkins = await requestsMonitor.getAll()
			let now
			jenkins.forEach( (e) => {
				now = new Date(e.date)
				if(!test.length) {
					test.push({
						y : 1,
						x : new Date( now.getFullYear(), now.getMonth() )
					})
				}
				else {
					doJenkins(now)
				}	
			})
			test = test.sort((a, b) => b.x - a.x)
			res.json(test)
		} catch (err) {
			return next(err)
		}
	})
}