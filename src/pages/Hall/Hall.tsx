import type { JSX } from "react";
import { motion } from "motion/react";
import {
	MouseParallaxChild,
	MouseParallaxContainer,
} from "react-parallax-mouse";

import AnimatedList from "../../components/AnimatedList/AnimatedList";
import type { AnimatedListProps } from "../../types/types";
import { animatedListData } from "../../data/animatedListHall";

import { Box, Grid, List, Typography } from "@mui/material";

import pencilImg from "../../assets/images/pencil/12.png";

import "./hallStyles.scss";

const Hall = (): JSX.Element => {
	return (
		<MouseParallaxContainer
			className="parallax"
			containerStyle={{ display: "grid", height: "90vh" }}
		>
			<MouseParallaxChild factorX={0.02} factorY={0.02}>
				<motion.div
					key="hall-page"
					className="hall-page"
					initial={{ y: "-100%" }}
					animate={{ y: 0 }}
					exit={{ y: "100%" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<Box component="div" className="agenda">
						<Grid>
							<motion.div
								initial={{ opacity: 0, y: "-100%" }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
							>
								<Typography sx={{ mt: 7, mb: 2 }} variant="h6" component="h6">
									План тренинга:
								</Typography>
							</motion.div>
							<List>
								{animatedListData.map(
									(list: AnimatedListProps, i: number): JSX.Element => {
										return (
											<AnimatedList
												key={i}
												text={list.text}
												delayTime={list.delayTime}
											/>
										);
									}
								)}
							</List>
						</Grid>
					</Box>
					<motion.div
						className="pencil-hall"
						initial={{ opacity: 0, x: "-100%" }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
					>
						<img src={pencilImg} alt="pencil-img" />
					</motion.div>
				</motion.div>
			</MouseParallaxChild>
		</MouseParallaxContainer>
	);
};

export default Hall;
