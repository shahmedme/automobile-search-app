import * as express from "express";
import { Application, Request, Response } from "express";
import * as mongoose from "mongoose";

class App {
	public app: Application;
	public port: number;
	public theme: any;
	public config: any;

	constructor(appInit: {
		port: number;
		middleWares: any;
		routers: any;
		mongoURL: string;
	}) {
		this.app = express();
		this.port = appInit.port;

		this.middleWares(appInit.middleWares);
		this.routers(appInit.routers);
		this.assets();
		this.mongoSetup(appInit.mongoURL);
	}

	private mongoSetup(mongoURL: string): void {
		mongoose.connect(mongoURL);
		console.log("may be connected to mongodb");
	}

	private middleWares(middleWares: {
		forEach: (arg0: (middleWare: any) => void) => void;
	}) {
		middleWares.forEach((middleWare) => {
			this.app.use(middleWare);
		});
	}

	private routers(appRouters: any) {
		appRouters.forEach((appRouter: any) => {
			this.app.use("/", appRouter.router);
		});
	}

	private assets() {
		this.app.use(express.static("public"));
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`App is listening on http://localhost:${this.port}`);
		});
	}
}

export default App;
