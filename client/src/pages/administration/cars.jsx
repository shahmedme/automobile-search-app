import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadCars } from "../../state/cars";
import Page from "../../components/Page";

export default function Cars(props) {
	const cars = useSelector((state) => state.cars);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadCars());
	}, []);

	return (
		<Page>
			<div className="carlist-page">
				<div className="container py-5">
					<table className="table">
						<thead className="thead-light">
							<tr>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">Price</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{cars.cars.map((car, idx) => (
								<tr>
									<th scope="row">{idx + 1}</th>
									<td>
										<Link to={`/car/${car._id}`} style={{ color: "inherit" }}>
											{car.title}
										</Link>
									</td>
									<td>${car.price}</td>
									<td>
										<Link
											to={`/edit/${car._id}`}
											className="btn btn-sm btn-primary"
										>
											<i className="fas fa-pencil-alt"></i>
										</Link>
										<button className="btn btn-sm btn-danger">
											<i className="fas fa-trash-alt"></i>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Page>
	);
}
