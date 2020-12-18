import { Router } from "express";
import PublicController from "../controllers/PublicController";

export class PublicRouter {
	public router = Router();
	public publicController: PublicController = new PublicController();

	constructor() {
		this.initRoutes();
	}

	private initRoutes() {
		this.router.get("/api/cars", this.publicController.getCars);
		this.router.post("/api/cars", this.publicController.addCar);
		this.router.put("/api/cars", this.publicController.updateCar);
		this.router.delete("/api/cars", this.publicController.deleteCar);
	}
}
