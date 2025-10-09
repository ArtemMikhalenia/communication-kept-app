import type { CardBlock1_1Props } from "../types/types";

export const cardsData: CardBlock1_1Props[] = [
	{
		title: "Старшие коллеги из ADC",
		list: ["TL/ATL", "Head of ADC", "Deputy Head of ADC", "ADC HR Specialists"],
		color: "rgba(182,240,255,1)",
		x: "-1000%",
		y: "-100%",
		shadow: "rgba(105, 149, 160, 1)",
		top: "rgba(123, 180, 194, 1)",
	},
	{
		title: "Коллеги из других отделов",
		list: ["Коллеги из других отделов", "Юзеры по тикетам и букингам"],
		color: "rgba(238,255,204,1)",
		x: "",
		y: "-250%",
		shadow: "rgba(166, 179, 140, 1)",
		top: "rgba(192, 207, 160, 1)",
	},
	{
		title: "Клиенты и контрагенты",
		list: [
			'При выполнении тикетов категории "обзвон контрагентов"',
			"При присутствии на встречах/звонках с клиентом (для старших ассистентов на букингах)*",
		],
		color: "rgba(255, 208, 247, 1)",
		x: "1000%",
		y: "-100%",
		shadow: "rgba(233, 158, 252, 1)",
		top: "rgba(240, 148, 248, 1)",
	},
];
