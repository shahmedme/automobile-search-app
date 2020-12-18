import React from "react";

export default function ResultCard() {
	return (
		<div className="result-card">
			<div className="card">
				<div className="card-body">
					<div className="row">
						<div className="col-3">
							<div className="img-wrapper">
								<img
									src="https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg"
									alt="car"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-8">
							<div className="row">
								<div className="col-9">
									<h5 className="name">Mercedes Bens C63 2017</h5>
									<small>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Esse, quos neque id quaerat itaque dolorem!
									</small>
								</div>
								<div className="col-3">
									<div className="pricing">
										<a href="/" className="btn btn-sm btn-success d-block m-0">
											Buy Now
										</a>
										<a
											href="/"
											className="btn btn-sm btn-secondary d-block mt-2"
										>
											$95223
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
