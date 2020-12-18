import React from "react";

export default function Navbar() {
	return (
		<div>
			<nav class="navbar navbar-expand-md navbar-dark bg-dark main-nav">
				<div class="container">
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target=".navbar-collapse"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse flex-1">
						<ul class="nav navbar-nav w-100">
							<li class="nav-item active">
								<a class="nav-link" href="/">
									Home
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/">
									Register
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/">
									More
								</a>
							</li>
						</ul>
					</div>
					<div class="order-first order-md-0 d-flex justify-content-center">
						<a class="navbar-brand mx-0" href="/">
							Car Shop
						</a>
					</div>
					<div class="collapse navbar-collapse flex-1">
						<ul class="nav navbar-nav ml-auto">
							<li class="nav-item">
								<a class="nav-link" href="/">
									Help
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
