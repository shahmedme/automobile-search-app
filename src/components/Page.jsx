import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Page(props) {
	return (
		<>
			<Navbar />
			{props.children}
			{/* <Footer /> */}
		</>
	);
}
