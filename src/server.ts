import * as bodyParser from "body-parser";
import App from "./app";
import loggerMiddleware from "./middlewares/logger";
import { PublicRouter } from "./routes/publicRoutes";

const dotenv = require("dotenv");
dotenv.config();

const app = new App({
	port: 5000,
	middleWares: [
		bodyParser.json(),
		bodyParser.urlencoded({ extended: false }),
		loggerMiddleware,
	],
	mongoURL: process.env.DB_STRING || "mongodb://127.0.0.1:27017/automobile",
	routers: [new PublicRouter()],
});

app.listen();
