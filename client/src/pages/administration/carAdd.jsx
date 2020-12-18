import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { addCar } from "../../state/cars";
import Page from "../../components/Page";

export default function AddCar() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [brand, setBrand] = useState("");
	const [newCar, setNewCar] = useState({});

	const dispatch = useDispatch();

	const handleFormSubmit = (e) => {
		e.preventDefault();

		let newCar = {
			title: title,
			price: price,
			description: description,
			brand: brand,
		};

		axios
			.post("/api/cars", newCar)
			.then(function (res) {
				dispatch(addCar(res.data));
				console.log("setting new car");
				setNewCar(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Page>
			{newCar._id === undefined ? (
				<div className="container py-4">
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h3
										className="panel-title text-center"
										style={{ fontWeight: "bold" }}
									>
										Add New Car
									</h3>
								</div>
								<div className="panel-body d-flex jutify-content-center">
									<form
										className="form-horizontal w-100"
										onSubmit={handleFormSubmit}
									>
										<div className="form-group">
											<label for="title" className="col-sm-3 control-label">
												Title
											</label>
											<div className="col-sm-12">
												<input
													type="text"
													className="form-control"
													name="title"
													id="title"
													placeholder="Name of the car with version"
													value={title}
													onChange={(e) => {
														setTitle(e.target.value);
													}}
												/>
											</div>
										</div>

										<div className="form-group">
											<label for="about" className="col-sm-3 control-label">
												Details
											</label>
											<div className="col-sm-12">
												<textarea
													className="form-control"
													placeholder="Car Details"
													rows="5"
													value={description}
													onChange={(e) => {
														setDescription(e.target.value);
													}}
												></textarea>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label for="price" className="col-sm-3 control-label">
														Price
													</label>
													<div className="col-sm-12">
														<input
															type="text"
															className="form-control"
															name="price"
															id="price"
															placeholder="Price"
															value={price}
															onChange={(e) => {
																setPrice(e.target.value);
															}}
														/>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label for="brand" className="col-sm-3 control-label">
														Brand
													</label>
													<div className="col-sm-12">
														<input
															type="text"
															className="form-control"
															name="brand"
															id="brand"
															placeholder="Brand"
															value={brand}
															onChange={(e) => {
																setBrand(e.target.value);
															}}
														/>
													</div>
												</div>
											</div>
										</div>

										<div className="form-group">
											<label for="name" className="col-sm-3 control-label">
												Add Photo
											</label>
											<div className="col-sm-3">
												<input type="file" name="file_img" />
											</div>
										</div>

										<hr />
										<div className="form-group">
											<div className="col-sm-offset-3 col-sm-12">
												<button type="submit" className="btn btn-primary">
													Add Car
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<Redirect to={`/car/${newCar._id}`} />
			)}
		</Page>
	);
}
