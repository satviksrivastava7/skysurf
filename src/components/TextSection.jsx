import { Text } from "@react-three/drei";
import {
	fadeOnBeforeCompile,
	fadeOnBeforeCompileFlat,
} from "../utils/fadeMaterial";

export const TextSection = ({ title, subtitle, ...props }) => {
	return (
		<>
			<group {...props}>
				{!!title && (
					<Text
						color="white"
						anchorX={"left"}
						anchorY={"bottom"}
						fontSize={0.52}
						maxWidth={2.5}
						lineHeight={1}
						font={"./fonts/DMSerifDisplay-Regular.ttf"}
					>
						{title}
						<meshStandardMaterial
							color={"white"}
							onBeforeCompile={fadeOnBeforeCompileFlat}
						/>
					</Text>
				)}

				<Text
					color="black"
					anchorX={"left"}
					anchorY={"top"}
					position-y={-0.66}
					fontSize={0.28}
					maxWidth={3.5}
					font={"./fonts/Inter-Regular.ttf"}
				>
					{subtitle}
					<meshStandardMaterial
						color={"white"}
						onBeforeCompile={fadeOnBeforeCompileFlat}
					/>
				</Text>
			</group>
		</>
	);
};
