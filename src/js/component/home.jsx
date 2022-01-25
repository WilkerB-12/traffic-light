import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
		<div id="box">
			<div
				onClick={() => setSelectedColor("red")}
				className={`red light ${
					selectedColor === "red" ? " shine" : ""
				}`}
			/>
			<div
				onClick={() => setSelectedColor("yellow")}
				className={`yellow light ${
					selectedColor === "yellow" ? " shine" : ""
				}`}
			/>
			<div
				onClick={() => setSelectedColor("green")}
				className={`green light ${
					selectedColor === "green" ? " shine" : ""
				}`}
			/>
		</div>
	);
};

export default Home;
