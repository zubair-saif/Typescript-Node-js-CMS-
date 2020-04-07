"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app/app.ts
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var express_session_1 = __importDefault(require("express-session"));
var connect_mongo_1 = __importDefault(require("connect-mongo"));
var bluebird_1 = __importDefault(require("bluebird"));
var mongoose_1 = __importDefault(require("mongoose"));
var compression_1 = __importDefault(require("compression"));
var passport_1 = __importDefault(require("passport"));
var secrets_1 = require("./util/secrets");
var routes_1 = require("./routes");
var MongoStore = connect_mongo_1.default(express_session_1.default);
// Create Express server
var app = express_1.default();
var mongoUrl = secrets_1.MONGODB_URI;
mongoose_1.default.Promise = bluebird_1.default;
mongoose_1.default.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(function () { }).catch(function (err) {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
var App = /** @class */ (function () {
    function App() {
        this.routePrv = new routes_1.Routes();
        this.app = express_1.default();
        this.routePrv.routes(this.app);
    }
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map