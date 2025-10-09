import type { CardBlock1_10Props } from "../types/types";

import EmojiPeopleRoundedIcon from "@mui/icons-material/EmojiPeopleRounded";
import FrontHandRoundedIcon from "@mui/icons-material/FrontHandRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import StopScreenShareRoundedIcon from "@mui/icons-material/StopScreenShareRounded";

export const cardsData: CardBlock1_10Props[] = [
	{
		icon: <EmojiPeopleRoundedIcon fontSize="large" />,
		text: "Здоровайтесь с коллегами в open-space, на кухне и в коридорах. Даже если вы не знаете человека лично или не узнаете его. О правилах этикета и вежливости необходимо помнить всегда.",
		x: "-250%",
		delayTime: 1,
	},
	{
		icon: <FrontHandRoundedIcon fontSize="large" />,
		text: "Помните о том, что обсуждение конфиденциальной информации (клиентских данных, данных, касающихся ваших или чужих трудовых договоров, размеров заработной платы и др.) недопустимо и может повлечь за собой предусмотренные штрафные санкции и ответственность.",
		x: "250%",
		delayTime: 1,
	},
	{
		icon: <VolumeOffRoundedIcon fontSize="large" />,
		text: "Старайтесь не создавать слишком сильный посторонний шум, который может отвлекать коллег от работы (громкие долгие разговоры по телефону, просмотр видео на большой громкости без наушников и т.д.).",
		x: "-250%",
		delayTime: 2,
	},
	{
		icon: <StopScreenShareRoundedIcon fontSize="large" />,
		text: "Во избежание нарушения правил информационной безопасности следите за тем, чтобы ваш ноутбук не оставался без присмотра, если он не прикреплен к рабочему столу с помощью специального локера. Если вам необходимо отойти от рабочего места и оставить ноутбук, всегда следите за тем, чтобы экран ноутбука был заблокирован.",
		x: "250%",
		delayTime: 2,
	},
	{
		icon: <MeetingRoomRoundedIcon fontSize="large" />,
		text: "Если вам необходимо пообщаться лично или обсудить важный вопрос с коллегой, и вы боитесь, что разговоры могут отвлечь других коллег - лучше всего проверить, свободна ли какая-нибудь из переговорных комнат.",
		x: "-250%",
		delayTime: 3,
	},
];
