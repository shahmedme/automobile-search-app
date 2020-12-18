import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ResultPage from "./pages/result";
import DetailsPage from "./pages/details";
import CarAddPage from "./pages/administration/carAdd";
import EditPage from "./pages/administration/edit";
import CarListPage from "./pages/administration/cars";
import NotFoundPage from "./pages/notFound";

export default function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/result" component={ResultPage} />
					<Route exact path="/details" component={DetailsPage} />
					<Route exact path="/new" component={CarAddPage} />
					<Route exact path="/cars" component={CarListPage} />
					<Route exact path="/edit" component={EditPage} />
					<Route path="*" component={NotFoundPage} />
				</Switch>
			</Router>
		</>
	);
}
