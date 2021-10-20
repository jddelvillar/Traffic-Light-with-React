import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [bright, setBright] = useState("red");

	return (
		<div className="traffic-light ">
			<div
				className={bright == "red" ? "light red glow" : "light red"}
				onClick={() => {
					setBright("red");
				}}></div>
			<div
				className={
					bright == "yellow" ? "light yellow glow" : "light yellow"
				}
				onClick={() => {
					setBright("yellow");
				}}></div>
			<div
				className={
					bright == "green" ? "light green glow" : "light green "
				}
				onClick={() => {
					setBright("green");
				}}></div>
		</div>
	);
};

export default Home;
