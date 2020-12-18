import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Page from "../components/Page";

export default function Details(props) {
	const cars = useSelector((state) => state.cars);
	const [selectedCar, setSelectedCar] = useState({});

	useEffect(() => {
		let newCar = cars.cars.filter((car) => {
			return car._id === props.match.params.id;
		});

		setSelectedCar(newCar[0]);
	}, []);

	return (
		<Page>
			<div className="details-page py-5">
				{console.log(selectedCar)}
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="img-wrapper">
								<img
									src="https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg"
									alt="car"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="content">
								<h4 className="title">{selectedCar.title}</h4>
								<h6 className="price">${selectedCar.price}</h6>
								<small>
									{selectedCar.description}
									<span className="more">more</span>
								</small>
								<div className="mt-4">
									<button className="btn btn-outline-info">
										Request a Quote
									</button>
									<button className="btn btn-primary">Buy Now</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}
