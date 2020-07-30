import React, { Component } from "react";
import DropzoneComponent from "./sections/DropzoneComponent";

export default class index extends Component {
	render() {
		return (
			<div style={{ margin: "20px" }}>
				<DropzoneComponent />
			</div>
		);
	}
}
