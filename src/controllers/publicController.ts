import { Request, Response } from "express";
import { Car } from "../models/carModel";

export default class PublicController {
	public getCars(req: Request, res: Response) {
		Car.find({}, function (err, cars) {
			if (err) {
				res.send(err);
			}

			res.json(cars);
		});
	}

	public addCar(req: Request, res: Response) {
		let car = new Car(req.body);

		if (!req.body.title && !req.body.price) {
			res.send({ msg: "please provide all the details" });
		}

		car.save((err, car) => {
			if (err) {
				res.send(err);
			}
			res.json(car);
		});
	}

	public updateCar(req: Request, res: Response) {
		let carId = req.body._id;
		let updatedCar = req.body;

		Car.findOneAndUpdate(
			{ _id: carId },
			updatedCar,
			{ upsert: true, new: true },
			function (err, car) {
				if (err) {
					res.send(err);
				}
				res.send(car);
			}
		);
	}

	public deleteCar(req: Request, res: Response) {
		let carId = req.body._id;

		Car.findByIdAndDelete(carId, function (err, car) {
			if (err) {
				res.send(err);
			}
			res.send(car);
		});
	}
}
