import type { CardBlock1_6PropsInterface } from "../interfaces/interfaces";

export const cardsData: CardBlock1_6PropsInterface[] = [
	{
		id: 1,
		title: "Задание №123456 закончил. Можешь посмотреть?",
		x: "-250%",
		delayTime: 1,
		isCorrect: false,
		isClicked: false,
		isPencilShow: false,
		pencilClassname: "activeLeft",
	},
	{
		id: 2,
		title:
			"Привет! Я работаю со своим заданием, часть уже готова, но есть вопросы - я их подсветил в РБ цветом. Глянешь, пожалуйста?",
		x: "250%",
		delayTime: 1,
		isCorrect: false,
		isClicked: false,
		isPencilShow: false,
		pencilClassname: "activeRight",
	},
	{
		id: 3,
		title: "Саша, я работаю с заданье №123456. Не понимаю, что делать",
		x: "-250%",
		delayTime: 2,
		isCorrect: false,
		isClicked: false,
		isPencilShow: false,
		pencilClassname: "activeTop",
	},
	{
		id: 4,
		title:
			"Привет! Саша, я закончил работу с заданием №123456. Новых вопросов нет, результат сохранил. По заданию дью дейт через 3 часа. Подскажи, пожалуйста, ты успеешь посмотреть?",
		x: "250%",
		delayTime: 2,
		isCorrect: true,
		isClicked: false,
		isPencilShow: false,
		pencilClassname: "activeBottom",
	},
	{
		id: 5,
		title:
			"Саша, привет! Я работаю с заданием №123456. Посмотрел инструкцию и пример, у меня есть несколько вопросов. Можем, пожалуйста, созвониться для обсуждения?",
		x: "-250%",
		delayTime: 3,
		isCorrect: true,
		isClicked: false,
		isPencilShow: false,
		pencilClassname: "activeTop1",
	},
	{
		id: 6,
		title:
			"Саша, привет! Я закончил работу с заданием №123456, остался только один вопрос по комментарию. Подскажи, пожалуйста, тебе удобно созвониться или посмотреть вопрос в РБ сейчас?",
		x: "250%",
		delayTime: 3,
		isCorrect: true,
		isClicked: false,
		isPencilShow: false,
		pencilClassname: "activeBottom1",
	},
];
