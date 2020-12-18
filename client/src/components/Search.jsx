import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Search(props) {
	const [term, setTerm] = useState("");
	const [isSearch, setIsSearch] = useState(false);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		setIsSearch(true);
	};

	return (
		<>
			<div className="search-area">
				<form onSubmit={handleOnSubmit}>
					<div className="row no-gutters">
						<div className="col-md-10">
							<input
								type="text"
								placeholder={props.placeholder}
								className="form-control form-control-alternative"
								value={term}
								onChange={(e) => {
									setTerm(e.target.value);
								}}
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
			{isSearch ? <Redirect to={`/search/${term}`} /> : ""}
		</>
	);
}
