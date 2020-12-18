import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ResultPage from "./pages/result";
import DetailsPage from "./pages/details";
import CarAddPage from "./pages/carAdd";
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
					<Route path="*" component={NotFoundPage} />
				</Switch>
			</Router>
		</>
	);
}
