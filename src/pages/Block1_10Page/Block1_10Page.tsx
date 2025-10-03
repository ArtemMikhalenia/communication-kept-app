import type { JSX } from "react";
import { motion } from "motion/react";
import { MouseParallaxChild } from "react-parallax-mouse";

import { Box, Typography } from "@mui/material";

import { cardsData } from "../../data/block1_10";
import CardBlock1_10 from "../../components/CardBlock1_10/CardBlock1_10";
import type { CardBlock1_10Props } from "../../types/types";

import pencilImg from "../../assets/images/pencil/9.png";

import "./block1_10PageStyles.scss";

const Block1_10Page = (): JSX.Element => {
	return (
		<MouseParallaxChild
			factorX={0.01}
			factorY={0.01}
			style={{ height: "100%" }}
		>
			<motion.div
				className="block1-10-page"
				initial={{ y: "-100%" }}
				animate={{ y: 0 }}
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
						fontSize="46px"
						fontWeight={600}
						sx={{
							textShadow: "2px 2px 2px #ffffff",
						}}
					>
						При работе оффлайн из офиса помните о следующих правилах
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
						(item: CardBlock1_10Props, i: number): JSX.Element => (
							<CardBlock1_10
								key={i}
								icon={item.icon}
								text={item.text}
								x={item.x}
								delayTime={item.delayTime}
							/>
						)
					)}
				</Box>
				<motion.div
					className="pencil-block1-10"
					initial={{ opacity: 0, y: "100%" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 5 }}
				>
					<img src={pencilImg} alt="pencil-img" />
				</motion.div>
			</motion.div>
		</MouseParallaxChild>
	);
};

export default Block1_10Page;
