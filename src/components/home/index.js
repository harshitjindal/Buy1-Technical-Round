import React, { Component } from "react";
import DropzoneComponent from "./sections/DropzoneComponent";

export default class index extends Component {
	render() {
		return (
			<div style={{ boxSizing: "border-box" }}>
				<DropzoneComponent />
			</div>
		);
	}
}
