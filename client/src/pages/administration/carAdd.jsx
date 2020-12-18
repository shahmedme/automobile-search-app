import React from "react";
import Page from "../../components/Page";

export default function home() {
	return (
		<Page>
			<div className="container py-4">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3
									className="panel-title text-center"
									style={{ fontWeight: "bold" }}
								>
									Add New Car
								</h3>
							</div>
							<div className="panel-body d-flex jutify-content-center">
								<form className="form-horizontal w-100">
									<div className="form-group">
										<label for="name" className="col-sm-3 control-label">
											Title
										</label>
										<div className="col-sm-12">
											<input
												type="text"
												className="form-control"
												name="name"
												id="name"
												placeholder="Name of the car with version"
											/>
										</div>
									</div>

									<div className="form-group">
										<label for="about" className="col-sm-3 control-label">
											Details
										</label>
										<div className="col-sm-12">
											<textarea
												className="form-control"
												placeholder="Car Details"
												rows="5"
											></textarea>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label for="price" className="col-sm-3 control-label">
													Price
												</label>
												<div className="col-sm-12">
													<input
														type="text"
														className="form-control"
														name="price"
														id="price"
														placeholder="Price"
													/>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label for="tech" className="col-sm-3 control-label">
													Condition
												</label>
												<div className="col-sm-12">
													<select className="form-control">
														<option value="new">New</option>
														<option value="used">Used</option>
													</select>
												</div>
											</div>
										</div>
									</div>

									<div className="form-group">
										<label for="name" className="col-sm-3 control-label">
											Add Photo
										</label>
										<div className="col-sm-3">
											<input type="file" name="file_img" />
										</div>
									</div>

									<hr />
									<div className="form-group">
										<div className="col-sm-offset-3 col-sm-12">
											<button type="submit" className="btn btn-primary">
												Add Car
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}
