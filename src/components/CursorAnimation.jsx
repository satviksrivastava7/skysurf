import React, { useEffect, useRef, useState } from "react";
import spinner from "./../../public/image/scroll-cursor.svg";
import clickableCursor from "./../../public/image/click-cursor.svg";

const CursorAnimation = () => {
	const [cursorType, setCursorType] = useState("default");
	const spinnerRef = useRef(null);

	const isMobileDevice = () => {
		return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);
	};

	useEffect(() => {
		if (isMobileDevice()) {
			return;
		}

		const handleMouseMove = (e) => {
			if (spinnerRef.current) {
				spinnerRef.current.style.left = `${e.pageX}px`;
				spinnerRef.current.style.top = `${e.pageY}px`;
			}
		};

		const handleMouseEnter = (e) => {
			if (e.target.closest("[data-cursor]")) {
				setCursorType("clickable");
			}
		};

		const handleMouseLeave = (e) => {
			if (e.target.closest("[data-cursor]")) {
				setCursorType("default");
			}
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseenter", handleMouseEnter, true);
		document.addEventListener("mouseleave", handleMouseLeave, true);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseenter", handleMouseEnter, true);
			document.removeEventListener("mouseleave", handleMouseLeave, true);
		};
	}, []);

	if (isMobileDevice()) {
		return null;
	}

	return (
		<div ref={spinnerRef} className="cursor-animation">
			<img
				src={cursorType === "default" ? spinner : clickableCursor}
				alt="Cursor Animation"
			/>
		</div>
	);
};

export default CursorAnimation;
