import React from "react";

export default function Search(props) {
	return (
		<>
			<div className="search-area">
				<form action="/search" method="GET">
					<div className="row no-gutters">
						<div className="col-md-10">
							<input
								type="text"
								placeholder={props.placeholder}
								className="form-control form-control-alternative"
							/>
						</div>
						<div className="col-md-2">
							<button className="btn btn-primary w-100 ml-2">
								{props.submitText}
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
