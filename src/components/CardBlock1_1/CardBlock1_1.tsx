import type { JSX } from "react";
import { motion } from "motion/react";
import type { CardBlock1_1Props } from "../../types/types";

import { MouseParallaxChild } from "react-parallax-mouse";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";

import LabelImportantOutlineRoundedIcon from "@mui/icons-material/LabelImportantOutlineRounded";

const CardBlock1_1 = ({
	title,
	list,
	color,
	x,
	y,
	shadow,
	top,
}: CardBlock1_1Props): JSX.Element => {
	return (
		<motion.div
			initial={{ x: x, y: y }}
			animate={{ x: 0, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
			style={{
				maxWidth: "400px",
				width: "100%",
				alignSelf: "stretch",
			}}
		>
			<MouseParallaxChild
				factorX={0.03}
				factorY={0.03}
				style={{ height: "100%" }}
			>
				<motion.div
					animate={{
						rotate: [5, 2, 5],
						transformOrigin: "top left",
					}}
					transition={{
						rotate: { duration: 5, ease: "easeInOut", repeat: Infinity },
					}}
					whileHover={{
						scale: 1.05,
					}}
				>
					<Card
						className="card"
						sx={{
							maxWidth: 400,
							height: "100%",
							cursor: "pointer",
							background: color,
							borderRadius: 0,
							border: "none",
							boxShadow: `5px 5px 1px 1px ${shadow}`,
							transition: "all 0.5s ease 0s",
							"&:hover": {
								transform: "scale(1.04)",
							},
						}}
					>
						<CardMedia sx={{ background: top, height: "40px" }} />
						<CardContent sx={{ height: "100%", padding: 2 }}>
							<Typography variant="h5" component="h5">
								{title}
							</Typography>
							<Box>
								<List>
									{list.map(
										(item: string, i: number): JSX.Element => (
											<ListItem key={i}>
												<ListItemAvatar sx={{ minWidth: 0 }}>
													<LabelImportantOutlineRoundedIcon />
												</ListItemAvatar>
												<ListItemText primary={item} />
											</ListItem>
										)
									)}
								</List>
							</Box>
						</CardContent>
					</Card>
				</motion.div>
			</MouseParallaxChild>
		</motion.div>
	);
};

export default CardBlock1_1;
