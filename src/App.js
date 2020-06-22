import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

import image from "./imageInSrc.jpg";
import video from "./Wildlife.wmv";

const App = () => {
	
		return (
			<>
				<div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
					<h1 className={"title red"}>Your name here</h1>
					<br />
					<img src={image} />
					<br />
					<img src={"/imageInPublic.jpg"} />
				</div>
				<div>
					<video width={"320"} height={"240"} controls src={video} type={"video/mp4"}>
					</video>
				</div>
			</>

		);
	
}

export default App;
