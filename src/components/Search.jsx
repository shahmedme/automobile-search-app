import React from "react";

export default function Search(props) {
	return (
		<>
			<div class="search-area">
				<form action="/search" method="GET">
					<div class="row no-gutters">
						<div class="col-md-10">
							<input
								type="text"
								placeholder={props.placeholder}
								class="form-control form-control-alternative"
							/>
						</div>
						<div class="col-md-2">
							<button class="btn btn-primary w-100 ml-2">
								{props.submitText}
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
