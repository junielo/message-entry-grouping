import * as dotenv from 'dotenv';
import { Application } from 'express';
import * as path from 'path';

class Locals {
    
    public static config() {
        dotenv.config({ path: path.join(__dirname, '../assets/.env') });

        const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
		const port = process.env.PORT || 4040;
        const isCORSEnabled = process.env.CORS_ENABLED || true;
        const apiPrefix = process.env.API_PREFIX || 'api';

        return {
            port,
            url,
            isCORSEnabled,
            apiPrefix
        };
    }

    public static init (_express: Application): Application {
		_express.locals.app = this.config();
		return _express;
	}
}

export default Locals;