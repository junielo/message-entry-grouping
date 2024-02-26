import { Application } from 'express';

import Locals from '../providers/locals';

class CORS {
	public mount(_express: Application): Application {
		console.log('Booting the \'CORS\' middleware...');

		_express.use(function (req, res, next) {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
			res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
			if (req.method === "OPTIONS")
			res.sendStatus(200);
			else
			next();
		  });

		return _express;
	}
}

export default new CORS;
