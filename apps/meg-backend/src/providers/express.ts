import express from 'express';
import Locals from './locals';

class Express {

    public express: express.Application;

    constructor () {
        this.express = express();
        
        this.mountDotEnv();
    }

    private mountDotEnv (): void {
		this.express = Locals.init(this.express);
	}
}