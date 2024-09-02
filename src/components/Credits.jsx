import React from "react";
import authorImg from "/image/satviksrivastava7.jpeg";

export const Credits = () => {
	return (
		<>
			<div
				className="spin-container"
				onClick={() => {
					window.open("https://bento.me/satviksrivastava7", "_blank");
				}}
			>
				<img className="authorImg" src={authorImg} />
				<div className="spin-image" />
			</div>
			;
		</>
	);
};
