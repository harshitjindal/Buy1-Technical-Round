import React from "react";
import { useDropzone } from "react-dropzone";

export default function DropzoneComponent(props) {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	return (
		<section className="container">
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				<p style={{ border: "2px dashed", height: "30vh", width: "70vw", padding: "10%", textAlign: "center" }}>
					Drag 'n' drop some files here, or click to select files
				</p>
			</div>
			<aside>
				<h4>Files</h4>
				<ul>{files}</ul>
			</aside>
		</section>
	);
}
