import React from "react";
import Search from "../components/Search";

export default function home() {
	return (
		<>
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
		</>
	);
}
