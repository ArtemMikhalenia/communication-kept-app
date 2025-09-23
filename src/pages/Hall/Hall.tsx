import type { JSX } from "react";
import { motion } from "motion/react";

import {
	Box,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";

import ExpandCircleDownTwoToneIcon from "@mui/icons-material/ExpandCircleDownTwoTone";

import "./hallStyles.scss";

type AnimatedListProps = {
	text: string[];
	delayTime: number;
};

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

const Hall = (): JSX.Element => {
	const animatedListData: AnimatedListProps[] = [
		{
			text: [
				"Т",
				"е",
				"о",
				"р",
				"и",
				"я",
				" ",
				"и",
				" ",
				"п",
				"р",
				"а",
				"к",
				"т",
				"и",
				"к",
				"а",
				" ",
				"д",
				"е",
				"л",
				"о",
				"в",
				"о",
				"г",
				"о",
				" ",
				"о",
				"б",
				"щ",
				"е",
				"н",
				"и",
				"я",
				" ",
				"в",
				" ",
				"A",
				"D",
				"C",
				" ",
				"и",
				" ",
				"в",
				" ",
				"д",
				"р",
				"у",
				"г",
				"и",
				"х",
				" ",
				"о",
				"т",
				"д",
				"е",
				"л",
				"а",
				"х",
			],
			delayTime: 1,
		},
		{
			text: [
				"П",
				"р",
				"а",
				"к",
				"т",
				"и",
				"ч",
				"е",
				"с",
				"к",
				"и",
				"е",
				" ",
				"з",
				"а",
				"д",
				"а",
				"н",
				"и",
				"я",
				" ",
				"п",
				"о",
				" ",
				"к",
				"о",
				"м",
				"м",
				"у",
				"н",
				"и",
				"к",
				"а",
				"ц",
				"и",
				"и",
			],
			delayTime: 2,
		},
		{
			text: [
				"С",
				"и",
				"т",
				"у",
				"а",
				"ц",
				"и",
				"о",
				"н",
				"н",
				"а",
				"я",
				" ",
				"м",
				"о",
				"д",
				"е",
				"л",
				"ь",
				" ",
				"-",
				" ",
				"п",
				"е",
				"р",
				"е",
				"п",
				"и",
				"с",
				"к",
				"а",
				" ",
				"с",
				" ",
				"ю",
				"з",
				"е",
				"р",
				"о",
				"м",
			],
			delayTime: 3,
		},
	];

	return (
		<motion.div
			key="hall-page"
			className="hall-page"
			initial={{ y: "-100%" }}
			animate={{ y: 0 }}
			exit={{ y: "100%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<Box component="div" className="agenda">
				<Grid>
					<motion.div
						initial={{ opacity: 0, y: "-100%" }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
					>
						<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="h6">
							План тренинга:
						</Typography>
					</motion.div>
					<List>
						{animatedListData.map(
							(list: AnimatedListProps, i: number): JSX.Element => {
								return (
									<AnimatedList
										key={i}
										text={list.text}
										delayTime={list.delayTime}
									/>
								);
							}
						)}
					</List>
				</Grid>
			</Box>
		</motion.div>
	);
};

export default Hall;
