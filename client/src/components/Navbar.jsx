import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark main-nav">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target=".navbar-collapse"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse flex-1">
						<ul className="nav navbar-nav w-100">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Help
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="order-first order-md-0 d-flex justify-content-center">
						<Link className="navbar-brand mx-0" to="/">
							Car Shop
						</Link>
					</div>
					<div className="collapse navbar-collapse flex-1">
						<ul className="nav navbar-nav ml-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Cars
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/add-car">
									Add Car
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
