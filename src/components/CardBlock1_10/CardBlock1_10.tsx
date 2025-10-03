import type { JSX } from "react";
import { motion } from "motion/react";
import type { CardBlock1_10Props } from "../../types/types";
import { Box, Card, CardContent, Typography } from "@mui/material";

const CardBlock1_10 = ({
	icon,
	text,
	x,
	delayTime,
}: CardBlock1_10Props): JSX.Element => {
	return (
		<motion.div
			initial={{ x: x }}
			animate={{ x: 0 }}
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
						display: "flex",
						paddingBottom: 0,
						height: "100%",
						":last-child": { paddingBottom: "16px" },
					}}
				>
					<Box display="flex" alignItems="center" gap="20px">
						{icon}
						<Typography sx={{ fontSize: "18px", textAlign: "justify" }}>
							{text}
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default CardBlock1_10;
