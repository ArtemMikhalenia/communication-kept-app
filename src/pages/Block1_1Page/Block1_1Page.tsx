import type { JSX } from "react";
import { motion } from "motion/react";

import CardBlock1_1 from "../../components/CardBlock1_1/CardBlock1_1";
import { cardsData } from "../../data/block1_1";
import type { CardBlock1_1Props } from "../../types/types";

import { MouseParallaxChild } from "react-parallax-mouse";

import { Grid, Typography } from "@mui/material";

import pencilImg from "../../assets/images/pencil/10.png";

import "./block1_1PageStyles.scss";

const Block1_1Page = (): JSX.Element => {
	return (
		<MouseParallaxChild
			factorX={0.01}
			factorY={0.01}
			style={{ height: "100%" }}
		>
			<motion.div
				className="block1-1-page"
				initial={{ y: "-100%" }}
				animate={{ y: 0 }}
				exit={{ y: "100%" }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
				style={{ display: "flex", flexDirection: "column" }}
			>
				<motion.div
					initial={{ y: "-100%" }}
					animate={{ y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
					style={{ flex: "0 1 20%" }}
				>
					<Typography
						variant="h3"
						color="secondary.main"
						paddingTop="20px"
						fontWeight={600}
						sx={{
							textShadow: "2px 2px 2px #ffffff",
						}}
					>
						Коммуникация в ADC
					</Typography>
				</motion.div>
				<Grid
					container
					size={{ xs: 3 }}
					spacing="10px"
					alignItems="center"
					justifyContent="space-evenly"
				>
					{cardsData.map(
						(item: CardBlock1_1Props, i: number): JSX.Element => (
							<CardBlock1_1
								key={i}
								title={item.title}
								list={item.list}
								color={item.color}
								x={item.x}
								y={item.y}
								shadow={item.shadow}
								top={item.top}
							/>
						)
					)}
				</Grid>
				<motion.div
					className="pencil-block1-1"
					initial={{ opacity: 0, y: "100%" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
				>
					<img src={pencilImg} alt="pencil-img" />
				</motion.div>
			</motion.div>
		</MouseParallaxChild>
	);
};

export default Block1_1Page;
