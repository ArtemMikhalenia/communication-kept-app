import type { JSX } from "react";
import { motion } from "motion/react";

import {
	Box,
	Card,
	CardContent,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import LabelImportantOutlineRoundedIcon from "@mui/icons-material/LabelImportantOutlineRounded";

import "./block1_1PageStyles.scss";

type CardBlock1_1Props = {
	title: string;
	list: string[];
	color: string;
	x: string;
	y: string;
};

const CardBlock1_1 = ({
	title,
	list,
	color,
	x,
	y,
}: CardBlock1_1Props): JSX.Element => {
	return (
		<motion.div
			initial={{ x: x, y: y }}
			animate={{ x: 0, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
			style={{
				height: "auto",
				alignSelf: "stretch",
			}}
		>
			<Card
				sx={{
					maxWidth: 360,
					height: "100%",
					cursor: "pointer",
					background: color,
					borderRadius: 0,
					boxShadow: "5px 5px 1px 1px #42424280",
					transition: "all 0.5s ease 0s",
					"&:hover": {
						transform: "scale(1.04)",
					},
				}}
			>
				<CardContent sx={{ height: "100%" }}>
					<Typography variant="h5" component="h5">
						{title}
					</Typography>
					<Box>
						<List>
							{list.map((item, i) => (
								<ListItem key={i}>
									<ListItemAvatar>
										<LabelImportantOutlineRoundedIcon />
									</ListItemAvatar>
									<ListItemText primary={item} />
								</ListItem>
							))}
						</List>
					</Box>
				</CardContent>
			</Card>
		</motion.div>
	);
};

const Block1_1Page = (): JSX.Element => {
	const cardsData: CardBlock1_1Props[] = [
		{
			title: "Старшие коллеги из ADC",
			list: [
				"TL/ATL",
				"Head of ADC",
				"Deputy Head of ADC",
				"ADC HR Specialists",
			],
			color: "rgb(182,240,255)",
			x: "-250%",
			y: "-100%",
		},
		{
			title: "Коллеги из других отделов",
			list: ["Коллеги из других отделов", "Юзеры по тикетам и букингам"],
			color: "rgb(238,255,204)",
			x: "",
			y: "-250%",
		},
		{
			title: "Клиенты и контрагенты",
			list: [
				'При выполнении тикетов категории "обзвон контрагентов"',
				"При присутствии на встречах/звонказ с клиентом (для старших ассистентов на букингах)*",
			],
			color: "rgb(253, 182, 124)",
			x: "250%",
			y: "-100%",
		},
	];

	return (
		<div className="block1-1-page">
			<motion.div
				initial={{ y: "-100%" }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
				style={{ height: "100%" }}
			>
				<motion.div
					initial={{ y: "-100%" }}
					animate={{ y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
				>
					<Typography
						variant="h3"
						color="secondary.main"
						padding={"20px 0px 70px"}
						fontWeight={600}
						sx={{
							textShadow: "2px 2px 2px #ffffff",
						}}
					>
						Коммуникация в ADC
					</Typography>
				</motion.div>
				<Grid
					container
					size={{ xs: 3 }}
					spacing={4}
					padding="10px"
					alignItems="center"
					justifyContent="space-evenly"
				>
					{cardsData.map((item, i) => (
						<CardBlock1_1
							key={i}
							title={item.title}
							list={item.list}
							color={item.color}
							x={item.x}
							y={item.y}
						/>
					))}
				</Grid>
			</motion.div>
		</div>
	);
};

export default Block1_1Page;
