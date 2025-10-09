import type { JSX } from "react";
import { motion } from "motion/react";
import type { CardBlock1_4Props } from "../../types/types";
import { MouseParallaxChild } from "react-parallax-mouse";
import { Box, Card, CardContent, Typography } from "@mui/material";

const CardBlock1_4 = ({
	icon,
	title,
	x,
	delayTime,
}: CardBlock1_4Props): JSX.Element => {
	return (
		<MouseParallaxChild
			factorX={0.02}
			factorY={0.02}
			style={{ height: "100%" }}
		>
			<motion.div
				initial={{ opacity: 0, x: x }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.5,
					ease: "easeOut",
					delay: delayTime,
				}}
				style={{
					height: "auto",
					alignSelf: "stretch",
				}}
			>
				<Card
					sx={{
						width: "100%",
						height: "100%",
						cursor: "pointer",
						padding: "15px 0px",
						background: "#5b33c0ff",
						color: "#ffffffff",
						borderRadius: 2,
						boxShadow: "2px 2px 1px 1px #ffffffff",
						transition: "all 0.5s ease 0s",
						"&:hover": {
							transform: "scale(1.04)",
						},
					}}
				>
					<CardContent
						sx={{
							paddingBottom: 0,
							height: "100%",
							":last-child": { paddingBottom: "16px" },
						}}
					>
						<Box display="flex" alignItems="center" gap="10px">
							{icon}
							<Typography sx={{ fontSize: "28px" }}>{title}</Typography>
						</Box>
					</CardContent>
				</Card>
			</motion.div>
		</MouseParallaxChild>
	);
};

export default CardBlock1_4;
