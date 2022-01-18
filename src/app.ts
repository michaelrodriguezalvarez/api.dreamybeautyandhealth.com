import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import TestRoutes from './routes/test.routes';
var bodyParse = require('body-parser');

export class App{
    private app: Application;

    constructor(){
        this.app = express();
        this.setting();
        this.middleware();
        this.routes();
    }

    setting(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.set('json spaces', 2);
    }

    middleware(): void {
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(): void {
        this.app.use('/api/test/', TestRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get("port"));
        console.log(`Server on port ${this.app.get('port')}`);
    }
}
