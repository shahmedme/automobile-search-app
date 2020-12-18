import React from "react";
import Page from "../components/Page";
import ResultCard from "../components/ResultCard";

export default function home() {
	return (
		<Page>
			<div className="result-page">
				<section className="py-3">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div class="search-area">
									<form action="/search" method="GET">
										<div className="input-group">
											<input
												type="text"
												placeholder="Search Again"
												class="form-control form-control"
											/>
											<div className="input-group-append">
												<button class="btn btn-primary w-100">Search</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="mt-4">
							<div className="row">
								<div class="col-lg-3 col-1">
									<Sidebar />
								</div>
								<div className="col-md-9">
									<ResultCard />
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
		<div class="card">
			<div class="card-body">
				<div class="d-flex flex-row">
					<div>
						<h6>Filters</h6>
					</div>
					<div class="ml-auto">
						<small
							class="text-red"
							style={{ fontSize: ".6em", fontWeight: "600" }}
						>
							Clear all filters
						</small>
					</div>
				</div>
				<hr class="m--1" />
				<div class="my-3">
					<h6 style={{ fontSize: ".9em" }}>Type of car</h6>
					<div class="custom-control custom-checkbox mb-1">
						<input class="custom-control-input" id="new" type="checkbox" />
						<label class="custom-control-label" for="new">
							<span>New</span>
						</label>
					</div>
					<div class="custom-control custom-checkbox mb-3">
						<input class="custom-control-input" id="used" type="checkbox" />
						<label class="custom-control-label" for="used">
							<span>Used</span>
						</label>
					</div>
				</div>
				<hr class="m--1" />
				<div class="my-3">
					<h6 style={{ fontSize: ".9em" }}>Color</h6>
					<div class="custom-control custom-checkbox mb-1">
						<input class="custom-control-input" id="new1" type="checkbox" />
						<label class="custom-control-label" for="new1">
							<span>Black</span>
						</label>
					</div>
					<div class="custom-control custom-checkbox mb-1">
						<input class="custom-control-input" id="used1" type="checkbox" />
						<label class="custom-control-label" for="used1">
							<span>Blue</span>
						</label>
					</div>
					<div class="custom-control custom-checkbox mb-1">
						<input class="custom-control-input" id="new2" type="checkbox" />
						<label class="custom-control-label" for="new2">
							<span>Green</span>
						</label>
					</div>
					<div class="custom-control custom-checkbox mb-1">
						<input class="custom-control-input" id="used2" type="checkbox" />
						<label class="custom-control-label" for="used2">
							<span>Grey</span>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
