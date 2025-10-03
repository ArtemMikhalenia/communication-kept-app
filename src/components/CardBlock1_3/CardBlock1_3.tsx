import type { JSX } from "react";
import { motion } from "motion/react";

import type { CardBlock1_3Props } from "../../types/types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CardBlock1_3 = ({
	image,
	title,
	x,
	y,
	delayTime,
}: CardBlock1_3Props): JSX.Element => {
	return (
		<motion.div
			initial={{ x: x, y: y, opacity: 0 }}
			animate={{ x: 0, y: 0, opacity: 1 }}
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
					background: "secondary.main",
					borderRadius: 2,
					transition: "all 0.5s ease 0s",
					"&:hover": {
						transform: "scale(1.03)",
					},
				}}
			>
				<CardMedia
					component="img"
					height="200px"
					image={image}
					alt="card-image"
				/>
				<CardContent
					sx={{
						padding: "10px",
						paddingBottom: 0,
						height: "100%",
						":last-child": { paddingBottom: "10px" },
					}}
				>
					<Typography sx={{ fontSize: "21px" }}>{title}</Typography>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default CardBlock1_3;
