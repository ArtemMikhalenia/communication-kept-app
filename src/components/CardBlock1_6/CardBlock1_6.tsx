import { type JSX } from "react";
import { motion } from "motion/react";

import type { CardBlock1_6Props } from "../../types/types";
import { Card, CardContent, Typography } from "@mui/material";

const CardBlock1_6 = ({
	id,
	title,
	x,
	delayTime,
	isCorrect,
	isClicked,
	toggleCard,
}: CardBlock1_6Props): JSX.Element => {
	const handleClick = () => {
		if (toggleCard) {
			toggleCard(id);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: x }}
			animate={{ opacity: 1, x: 0 }}
			transition={{
				duration: 0.5,
				ease: "easeOut",
				delay: delayTime,
			}}
			style={{
				alignSelf: "stretch",
			}}
		>
			<motion.div
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.95, rotate: -1 }}
				onClick={handleClick}
				style={{
					height: "100%",
				}}
			>
				<Card
					sx={{
						position: "relative",
						width: "100%",
						height: "100%",
						cursor: "pointer",
						borderRadius: 2,
						boxShadow: "5px 5px 1px 1px #42424280",
						transition: "all 0.5s ease 0s",
						background: isClicked
							? isCorrect
								? "#00dd99ff"
								: "#ff605cff"
							: "background.paper",
						color: isClicked
							? isCorrect
								? "#ffffff"
								: "#ffffff"
							: "$box-shadow-grey",
					}}
				>
					<CardContent
						sx={{
							paddingBottom: 0,
							height: "100%",
							":last-child": { paddingBottom: "16px" },
						}}
					>
						<Typography sx={{ fontSize: "22px", textAlign: "justify" }}>
							{title}
						</Typography>
					</CardContent>
				</Card>
			</motion.div>
		</motion.div>
	);
};

export default CardBlock1_6;
