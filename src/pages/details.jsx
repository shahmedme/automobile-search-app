import React from "react";
import Page from "../components/Page";

export default function details() {
	return (
		<Page>
			<div className="details-page py-5">
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
								<h4 className="title">Alpha Beta Gamma</h4>
								<h6 className="price">$999</h6>
								<small>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
									repellat ipsam non quia doloribus ullam. Saepe velit eligendi
									repellat voluptatem? Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quis dolor quas dolorem repellendus?
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
