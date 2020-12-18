import React from "react";
import Page from "../../components/Page";

export default function cars() {
	return (
		<Page>
			<div className="carlist-page">
				<div className="container py-5">
					<table className="table">
						<thead className="thead-light">
							<tr>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">Price</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mercedes Benz</td>
								<td>$999</td>
								<td>
									<button className="btn btn-sm btn-primary">
										<i className="fas fa-pencil-alt"></i>
									</button>
									<button className="btn btn-sm btn-danger">
										<i className="fas fa-trash-alt"></i>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</Page>
	);
}
