import React, { useState, useRef, useEffect } from "react";
import cloudImage from "./../../public/image/cloud.jpg";
import audioBar from "./../../public/image/music-white.gif";
import playIcon from "./../../public/image/play.webp";
import bgMusic from "./../../public/audio/clouds.mp3";

const MusicCard = ({ showSpinnerAfter }) => {
	const [isMuted, setIsMuted] = useState(true);
	const audioRef = useRef(null);

	useEffect(() => {
		if (showSpinnerAfter) {
			if (audioRef.current) {
				audioRef.current.play();
				setIsMuted(false);
			}
		}
	}, [showSpinnerAfter]);

	const handleMusic = () => {
		if (audioRef.current) {
			if (isMuted) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
			setIsMuted(!isMuted);
		}
	};

	return (
		<div className="music-card">
			<div className="card-container">
				<div className="card-image">
					<img
						className="music-cover"
						src={cloudImage}
						alt="cloudy sky cover"
					/>
					<div className="music-action" data-cursor="clickable">
						<img
							className="music-status"
							src={isMuted ? playIcon : audioBar}
							alt="audio sound wave"
							onClick={handleMusic}
						/>
					</div>
				</div>
			</div>
			<audio ref={audioRef} src={bgMusic} loop />
		</div>
	);
};

export default MusicCard;
