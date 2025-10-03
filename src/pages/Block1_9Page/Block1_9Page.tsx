import { useState, type JSX } from "react";
import { motion } from "motion/react";
import { cardsData } from "../../data/block1_9";
import CardBlock1_9 from "../../components/CardBlock1_9/CardBlock1_9";
import type { CardBlock1_9Props } from "../../types/types";
import type { CardBlock1_9PropsInterface } from "../../interfaces/interfaces";

import { Box, Typography } from "@mui/material";

import { MouseParallaxChild } from "react-parallax-mouse";

import pencilHappyImg from "../../assets/images/pencil/15.png";
import pencilAngryImg from "../../assets/images/pencil/11.png";

import "./block1_9PageStyles.scss";

const Block1_9Page = (): JSX.Element => {
	const [cards, setCards] = useState<CardBlock1_9PropsInterface[]>(cardsData);
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
		<MouseParallaxChild
			factorX={0.01}
			factorY={0.01}
			style={{ height: "100%" }}
		>
			<motion.div
				className="block1-9-page"
				initial={{ y: "-100%" }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
				style={{ display: "flex", flexDirection: "column" }}
			>
				<motion.div
					initial={{ y: "-120%" }}
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
							zIndex: -2,
						}}
					>
						Примеры переписок с юзером
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
						(item: CardBlock1_9Props): JSX.Element => (
							<CardBlock1_9
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
						className={`pencil-block1-9 ${pencilClassname}`}
					>
						<img
							src={pencil ? pencilHappyImg : pencilAngryImg}
							alt="pencil-img"
						/>
					</Box>
				)}
			</motion.div>
		</MouseParallaxChild>
	);
};

export default Block1_9Page;
