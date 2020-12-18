import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Page from "../components/Page";
import ResultCard from "../components/ResultCard";

export default function Result(props) {
	const cars = useSelector((state) => state.cars);
	const [localCars, setLocalCar] = useState([]);

	useEffect(() => {
		let newCars = cars.cars.filter((car) => {
			return car.brand === props.match.params.term;
		});

		setLocalCar(newCars);
	}, []);

	return (
		<Page>
			{console.log(localCars)}
			<div className="result-page">
				<section className="py-3">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="search-area">
									<form action="/search" method="GET">
										<div className="input-group">
											<input
												type="text"
												placeholder="Search Again"
												className="form-control form-control"
											/>
											<div className="input-group-append">
												<button className="btn btn-primary w-100">
													Search
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="mt-4">
							<div className="row">
								<div className="col-lg-3 col-1">
									<Sidebar />
								</div>
								<div className="col-md-9">
									{localCars.length === 0 ? (
										<h1>No Car Found</h1>
									) : (
										localCars.map((localCar) => <ResultCard data={localCar} />)
									)}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Page>
	);
}

function Sidebar() {
	return (
		<div className="card">
			<div className="card-body">
				<div className="d-flex flex-row">
					<div>
						<h6>Filters</h6>
					</div>
					<div className="ml-auto">
						<small
							className="text-red"
							style={{ fontSize: ".6em", fontWeight: "600" }}
						>
							Clear all filters
						</small>
					</div>
				</div>
				<hr className="m--1" />
				<div className="my-3">
					<h6 style={{ fontSize: ".9em" }}>Type of car</h6>
					<div className="custom-control custom-checkbox mb-1">
						<input className="custom-control-input" id="new" type="checkbox" />
						<label className="custom-control-label" for="new">
							<span>New</span>
						</label>
					</div>
					<div className="custom-control custom-checkbox mb-3">
						<input className="custom-control-input" id="used" type="checkbox" />
						<label className="custom-control-label" for="used">
							<span>Used</span>
						</label>
					</div>
				</div>
				<hr className="m--1" />
				<div className="my-3">
					<h6 style={{ fontSize: ".9em" }}>Color</h6>
					<div className="custom-control custom-checkbox mb-1">
						<input className="custom-control-input" id="new1" type="checkbox" />
						<label className="custom-control-label" for="new1">
							<span>Black</span>
						</label>
					</div>
					<div className="custom-control custom-checkbox mb-1">
						<input
							className="custom-control-input"
							id="used1"
							type="checkbox"
						/>
						<label className="custom-control-label" for="used1">
							<span>Blue</span>
						</label>
					</div>
					<div className="custom-control custom-checkbox mb-1">
						<input className="custom-control-input" id="new2" type="checkbox" />
						<label className="custom-control-label" for="new2">
							<span>Green</span>
						</label>
					</div>
					<div className="custom-control custom-checkbox mb-1">
						<input
							className="custom-control-input"
							id="used2"
							type="checkbox"
						/>
						<label className="custom-control-label" for="used2">
							<span>Grey</span>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
