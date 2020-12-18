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
								<form class="form-horizontal w-100">
									<div class="form-group">
										<label for="name" class="col-sm-3 control-label">
											Title
										</label>
										<div class="col-sm-12">
											<input
												type="text"
												class="form-control"
												name="name"
												id="name"
												placeholder="Name of the car with version"
											/>
										</div>
									</div>

									<div class="form-group">
										<label for="about" class="col-sm-3 control-label">
											Details
										</label>
										<div class="col-sm-12">
											<textarea
												class="form-control"
												placeholder="Car Details"
											></textarea>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div class="form-group">
												<label for="price" class="col-sm-3 control-label">
													Price
												</label>
												<div class="col-sm-12">
													<input
														type="text"
														class="form-control"
														name="price"
														id="price"
														placeholder="Price"
													/>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div class="form-group">
												<label for="tech" class="col-sm-3 control-label">
													Condition
												</label>
												<div class="col-sm-12">
													<select class="form-control">
														<option value="new">New</option>
														<option value="used">Used</option>
													</select>
												</div>
											</div>
										</div>
									</div>

									<div class="form-group">
										<label for="name" class="col-sm-3 control-label">
											Add Photo
										</label>
										<div class="col-sm-3">
											<input type="file" name="file_img" />
										</div>
									</div>

									<hr />
									<div class="form-group">
										<div class="col-sm-offset-3 col-sm-12">
											<button type="submit" class="btn btn-primary">
												Add Product
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
