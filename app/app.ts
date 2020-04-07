// app/app.ts
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import mongo from "connect-mongo";
import bluebird from "bluebird";
import mongoose from "mongoose";
import compression from "compression";
import passport from "passport";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";
import { Routes } from "./routes";
const MongoStore = mongo(session);

// Create Express server
const app = express();

const mongoUrl = MONGODB_URI;
mongoose.Promise = bluebird;

mongoose.connect(mongoUrl, {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

}).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());


class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    constructor() {
        this.app = express();
        this.routePrv.routes(this.app);
    }
}

export default new App().app;