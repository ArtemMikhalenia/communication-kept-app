import type { JSX } from "react";
import { motion } from "motion/react";
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

export type ListItem_Props = {
	text: string;
	delayTime: number;
};

const ListItemAnimated = ({ text, delayTime }: ListItem_Props): JSX.Element => {
	return (
		<motion.div
			initial={{ x: "-200%" }}
			animate={{ x: 0 }}
			transition={{ duration: 0.5, ease: "easeOut", delay: delayTime }}
		>
			<ListItem>
				<ListItemAvatar>
					<TaskAltRoundedIcon />
				</ListItemAvatar>
				<ListItemText primary={text} />
			</ListItem>
		</motion.div>
	);
};

export default ListItemAnimated;
