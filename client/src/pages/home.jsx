import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCars } from "../state/cars";
import Search from "../components/Search";

function Home(props) {
	const cars = useSelector((state) => state.cars);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadCars());
	}, []);

	return (
		<div className="homepage">
			<section className="hero">
				<div className="container">
					<div className="text-center wrapper">
						<h1 className="mb-3 title">Search the best car</h1>
						<Search
							placeholder="What car do you want to buy"
							submitText="Search"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
