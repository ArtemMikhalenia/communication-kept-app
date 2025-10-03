import type { CardBlock1_3Props } from "../types/types";

import card1Img from "../assets/images/block1/block1_2/card1.jpg";
import card2Img from "../assets/images/block1/block1_2/card2.jpg";
import card3Img from "../assets/images/block1/block1_2/card3.jpg";
import card4Img from "../assets/images/block1/block1_2/card4.jpg";
import card5Img from "../assets/images/block1/block1_2/card5.jpg";
import card6Img from "../assets/images/block1/block1_2/card6.jpg";

export const cardsData: CardBlock1_3Props[] = [
	{
		image: card1Img,
		title: "Корректность и доброжелательность",
		x: "-250%",
		y: "0",
		delayTime: 2,
	},
	{
		image: card2Img,
		title: "Непредвзятость",
		x: "0",
		y: "-250%",
		delayTime: 3,
	},
	{
		image: card3Img,
		title: "Пунктуальность",
		x: "250%",
		y: "0",
		delayTime: 2,
	},
	{
		image: card4Img,
		title: "Доступность и ясность речи",
		x: "-250%",
		y: "0",
		delayTime: 4,
	},
	{
		image: card5Img,
		title: "Соблюдение существующих ограничений",
		x: "0",
		y: "250%",
		delayTime: 3,
	},
	{
		image: card6Img,
		title: "Внимательность",
		x: "250%",
		y: "0",
		delayTime: 4,
	},
];
