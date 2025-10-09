import type { CardBlock1_4Props } from "../types/types";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

export const cardsData: CardBlock1_4Props[] = [
	{
		icon: <PersonOutlineOutlinedIcon fontSize="large" />,
		title: 'Обращение на "ты" с использованием имен',
		x: "-250%",
		delayTime: 1,
	},
	{
		icon: <TextsmsOutlinedIcon fontSize="large" />,
		title: "Обратная связь",
		x: "250%",
		delayTime: 1,
	},
	{
		icon: <HandshakeOutlinedIcon fontSize="large" />,
		title: "Корректность и доброжелательность",
		x: "-250%",
		delayTime: 2,
	},
	{
		icon: <TipsAndUpdatesOutlinedIcon fontSize="large" />,
		title: "Своевременное информирование",
		x: "250%",
		delayTime: 2,
	},
	{
		icon: <LibraryBooksOutlinedIcon fontSize="large" />,
		title: "Вежливость и пунктуальность",
		x: "-250%",
		delayTime: 3,
	},
];
