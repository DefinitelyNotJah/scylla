const JSONdb = require('simple-json-db');
const db = new JSONdb('./models/database.json');

function getAll () {
	return new Promise( (resolve, reject) => {
		try {
			if(!db.has('reqs'))
				db.set('req', [])
			resolve(db.get('reqs'))
		} catch (err) {
			reject (err)
		}
	} )
}

async function AddElement(ip, agent, query) {
	return new Promise( (resolve, reject) => {
		try {
			if(!db.has('reqs'))
				db.set('reqs', [])
			let currentDBs = db.get('reqs')
			currentDBs.push({
				ip : ip,
				userAgent : agent,
				_params : query,
				date : Date.now()
			})
			db.set('reqs', currentDBs)
			resolve(true)
		} catch (err) {
			reject(err)
		}
	});
}

module.exports = {
	getAll,
	AddElement
}