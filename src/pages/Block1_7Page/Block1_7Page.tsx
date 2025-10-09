import type { JSX } from "react";
import { motion } from "motion/react";

import { Box, Typography } from "@mui/material";

import { cardsData } from "../../data/block1_7";
import CardBlock1_7 from "../../components/CardBlock1_7/CardBlock1_7";

import type { CardBlock1_7Props } from "../../types/types";

import pencilImg from "../../assets/images/pencil/17.png";

import "./block1_7PageStyles.scss";

const Block1_7Page = (): JSX.Element => {
	return (
		<motion.div
			className="block1-7-page"
			initial={{ x: "200%" }}
			animate={{ x: 0 }}
			exit={{ x: "-200%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			style={{ display: "flex", flexDirection: "column" }}
		>
			<motion.div
				initial={{ y: "-100%" }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
				style={{ flex: "0 1 20%" }}
			>
				<Typography
					variant="h3"
					color="secondary.main"
					paddingTop="2vmin"
					sx={{
						fontWeight: "600",
						textShadow: "2px 2px 2px #ffffff",
					}}
				>
					Коммуникация с коллегами из других отделов и юзерами
				</Typography>
			</motion.div>
			<Box
				component="div"
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
					gap: "20px",
					padding: "0px 20px",
					alignItems: "center",
				}}
			>
				{cardsData.map(
					(item: CardBlock1_7Props, i: number): JSX.Element => (
						<CardBlock1_7
							key={i}
							icon={item.icon}
							title={item.title}
							x={item.x}
							delayTime={item.delayTime}
						/>
					)
				)}
			</Box>
			<motion.div
				className="pencil-block1-7"
				initial={{ opacity: 0, y: "100%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
			>
				<img src={pencilImg} alt="pencil-img" />
			</motion.div>
		</motion.div>
	);
};

export default Block1_7Page;
