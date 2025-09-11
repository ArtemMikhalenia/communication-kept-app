import type {
	DatabaseCardInterface,
	ExerciseCardInterface,
	Notification,
	PersonalCard,
	UserInformation,
} from "../interfaces/interfaces.ts";

export type AlertSeverity = "error" | "warning" | "info" | "success";

export type AppBarProps = {
	toggleDrawer: () => void;
};

export type PersonalCardData = PersonalCard;

export type DatabaseCardData = DatabaseCardInterface;
export type ExerciseCardData = ExerciseCardInterface;

export type EditModalProps = {
	openModal: boolean;
	onClose: () => void;
	data: UserInformation;
};

export type DatabaseModalProps = {
	openModal: boolean;
	onClose: () => void;
	data: DatabaseCardInterface | null;
};

export type SnackbarProps = {
	open: boolean;
	onClose: () => void;
	notification: Notification;
};

export type TrainingContextType = {
  currentTrainingId: string;
  setCurrentTrainingId: (id: string) => void;
};