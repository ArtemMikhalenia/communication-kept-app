import type { JSX } from "react";
import { motion } from "motion/react";

import type { AnimatedListProps } from "../../types/types";

import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";

import ExpandCircleDownTwoToneIcon from "@mui/icons-material/ExpandCircleDownTwoTone";

const AnimatedList = ({ text, delayTime }: AnimatedListProps): JSX.Element => {
	return (
		<motion.div
			initial={{ opacity: 0, y: "-100%" }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut", delay: delayTime }}
		>
			<ListItem>
				<ListItemAvatar>
					<ExpandCircleDownTwoToneIcon />
				</ListItemAvatar>
				<ListItemText
					primary={text.map(
						(item: string, index: number): JSX.Element => (
							<motion.span
								key={index}
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: {
										duration: 0.7,
										delay: delayTime + index * 0.05,
									},
								}}
							>
								{item}
							</motion.span>
						)
					)}
				/>
			</ListItem>
		</motion.div>
	);
};

export default AnimatedList;
