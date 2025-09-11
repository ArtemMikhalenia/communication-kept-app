import type { AlertSeverity } from "../types/types.ts";

export interface DashboardData {
	pageTitle: string;
	link: string;
}

export interface UserInformation {
	email: string;
	id: string;
	fullName: string;
	birthday: string;
	gender: string;
	weight: string;
	height: string;
	medicalInfo: string;
	goal: string;
	phone: string;
	achievements: string;
}

export interface Exercise {
	title: string;
	reps: string;
	weight: string;
	createdAt: string;
	finished: boolean;
}

export interface Trainings {
	createdAt: string;
	exercises: Exercise[];
}

export interface UserData {
	uid: string;
	userInformation: UserInformation;
}

export interface Point {
	title: string;
	value: string;
}

export interface PersonalCard {
	title: string;
	points: Point[];
}

export interface Notification {
	severity: AlertSeverity;
	message: string;
}

export interface DatabaseCardInterface {
	alt: string;
	image: string;
	instruction: string;
	title: string;
}

export interface ExerciseCardInterface {
	id: string;
	title: string;
	set: string;
	reps: string;
	weight: string;
	finished: boolean;
	onDelete: () => void;
	onFinish: () => void;
}
