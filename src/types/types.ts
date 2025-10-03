import type { ReactElement } from "react";

export type AppBarProps = {
	pageTitleName: string;
	toggleDrawer: () => void;
};

export type AnimatedListProps = {
	text: string[];
	delayTime: number;
};

export type CardBlock1_1Props = {
	title: string;
	list: string[];
	color: string;
	x: string;
	y: string;
	shadow: string;
	top: string;
};

export type CardBlock1_3Props = {
	image: string;
	title: string;
	x: string;
	y: string;
	delayTime: number;
};

export type CardBlock1_4Props = {
	icon: ReactElement;
	title: string;
	x: string;
	delayTime: number;
};

export type CardBlock1_6Props = {
	id: string | number;
	title: string;
	x: string;
	delayTime: number;
	isCorrect: boolean;
	isClicked: boolean;
	toggleCard?: (id: string | number) => void;
};

export type CardBlock1_7Props = {
	icon: ReactElement;
	title: string;
	x: string;
	delayTime: number;
};

export type CardBlock1_9Props = {
	id: string | number;
	title: string;
	x: string;
	delayTime: number;
	isCorrect: boolean;
	isClicked: boolean;
	toggleCard?: (id: string | number) => void;
};

export type CardBlock1_10Props = {
	icon: ReactElement;
	text: string;
	x: string;
	delayTime: number;
};
