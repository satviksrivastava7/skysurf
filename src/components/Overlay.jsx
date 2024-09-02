import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/PlayContext";
import { useState, useEffect, useRef } from "react";
import authorImg from "/image/satviksrivastava7.jpeg";
import MusicCard from "./MusicCard";

export const Overlay = () => {
	const { progress } = useProgress();
	const { play, setPlay, hasScroll, end } = usePlay();
	const [showSpinnerAfter, setShowSpinnerAfter] = useState(false);

	useEffect(() => {
		if (progress === 100 && play) {
			setTimeout(() => {
				setShowSpinnerAfter(true);
			}, 100);
		}
	}, [progress, play]);

	return (
		<div
			className={`overlay ${play ? "overlay--disable" : ""} ${
				hasScroll ? "overlay--scrolled" : ""
			}`}
		>
			<div
				className={`loader ${
					progress === 100 ? "loader--disappear" : ""
				}`}
			/>
			{progress === 100 && (
				<div className={`intro ${play ? "intro--disappear" : ""}`}>
					<h1 className="logo">
						SKY SURF
						<div className="spinner">
							<div className="spinner__image" />
						</div>
					</h1>

					<p className="intro__scroll">
						Scroll to begin the journey...
					</p>

					<button
						className="explore"
						data-cursor="clickable"
						onClick={() => {
							setPlay(true);
						}}
					>
						Explore
					</button>

					<div className={`outro ${end ? "outro--appear" : ""}`}>
						<p className="outro__text">
							That's all folks! This is me, Satvik Srivastava. I
							am a web developer that tells elegant story with
							design and amazing experience. Check out my other
							projects in my portfolio.
							<br />
							If you require my services, reach me out via{" "}
							<a
								href="satviksrivastava7@gmail.com"
								target="_blank"
							>
								email.
							</a>
						</p>

						<div className="btnContainer">
							<button
								className="outroBtn"
								data-cursor="clickable"
								onClick={() => {
									window.location.reload();
								}}
							>
								Restart
							</button>

							<button
								className="outroBtn"
								onClick={() => {
									window.open(
										"https://bento.me/satviksrivastava7",
										"_blank"
									);
								}}
							>
								Portfolio
							</button>
						</div>
					</div>
				</div>
			)}

			{showSpinnerAfter && (
				<>
					<div
						className="spin-container"
						data-cursor="clickable"
						onClick={() => {
							window.open(
								"https://bento.me/satviksrivastava7",
								"_blank"
							);
						}}
					>
						<img className="authorImg" src={authorImg} />
						<div className="spin-image" />
					</div>

					<MusicCard showSpinnerAfter={showSpinnerAfter} />
				</>
			)}
		</div>
	);
};
