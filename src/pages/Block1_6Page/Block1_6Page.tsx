import { useState, type JSX } from "react";
import { motion } from "motion/react";
import { cardsData } from "../../data/block1_6";
import CardBlock1_6 from "../../components/CardBlock1_6/CardBlock1_6";
import type { CardBlock1_6Props } from "../../types/types";
import type { CardBlock1_6PropsInterface } from "../../interfaces/interfaces";

import { Box, Typography } from "@mui/material";

import pencilHappyImg from "../../assets/images/pencil/15.png";
import pencilAngryImg from "../../assets/images/pencil/11.png";

import "./block1_6PageStyles.scss";

const Block1_6Page = (): JSX.Element => {
	const [cards, setCards] = useState<CardBlock1_6PropsInterface[]>(cardsData);
	const [pencil, setPencil] = useState<boolean>();
	const [pencilClassname, setPencilClassname] = useState<string>();
	const [cardClicked, setCardClicked] = useState<boolean>();

	const handleToggleCard = (id: string | number) => {
		setCards((prevCards) => {
			return prevCards.map((card) => {
				if (card.id === id) {
					if (card.isCorrect) {
						setPencil(true);
						setPencilClassname(card.pencilClassname);
					} else {
						setPencil(false);
						setPencilClassname(card.pencilClassname);
					}
					setCardClicked(!card.isClicked);
					return {
						...card,
						isClicked: !card.isClicked,
						isPencilShow: !card.isPencilShow,
					};
				}
				return card;
			});
		});
	};

	return (
		<motion.div
			className="block1-6-page"
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
					Примеры переписок с TL/ATL
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
				{cards.map(
					(item: CardBlock1_6Props): JSX.Element => (
						<CardBlock1_6
							id={item.id}
							key={item.id}
							title={item.title}
							x={item.x}
							delayTime={item.delayTime}
							isCorrect={item.isCorrect}
							isClicked={item.isClicked}
							toggleCard={handleToggleCard}
						/>
					)
				)}
			</Box>
			{cardClicked && (
				<Box
					key={pencilClassname}
					className={`pencil-block1-6 ${pencilClassname}`}
				>
					<img
						src={pencil ? pencilHappyImg : pencilAngryImg}
						alt="pencil-img"
					/>
				</Box>
			)}
		</motion.div>
	);
};

export default Block1_6Page;
