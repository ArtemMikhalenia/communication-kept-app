import type { JSX } from "react";
import { motion } from "motion/react";

import type { CardBlock1_3Props } from "../../types/types";
import CardBlock1_3 from "../../components/CardBlock1_3/CardBlock1_3";
import { cardsData } from "../../data/block1_3";

import { Box, Typography } from "@mui/material";

import "./block1_3PageStyles.scss";

const Block1_3Page = (): JSX.Element => {
	return (
		<motion.div
			key={location.pathname}
			className="block1-3-page"
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
					Основные правила эффективной деловой коммуникации
				</Typography>
			</motion.div>
			<Box
				component="div"
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: "10px",
					padding: "0px 20px",
					alignItems: "center",
				}}
			>
				{cardsData.map(
					(item: CardBlock1_3Props, i: number): JSX.Element => (
						<CardBlock1_3
							key={i}
							image={item.image}
							title={item.title}
							x={item.x}
							y={item.y}
							delayTime={item.delayTime}
						/>
					)
				)}
			</Box>
		</motion.div>
	);
};

export default Block1_3Page;
