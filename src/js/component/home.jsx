import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div id="box">
			<div className="red light" />
			<div className="yellow light" />
			<div className="green light" />
		</div>
	);
};

export default Home;
