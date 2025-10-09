import type { JSX } from "react";
import { motion } from "motion/react";

import { Typography } from "@mui/material";

import pencilImg from "../../assets/images/pencil/6.png";

import "./block3PageStyles.scss";

const Block3Page = (): JSX.Element => {
	return (
		<motion.div
			className="block3-page"
			initial={{ y: "-100%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
		>
			<motion.div className="block3-page-grid">
				<motion.div
					initial={{ x: "-200%" }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
					className="block3-page-left-grid"
				>
					<motion.div
						initial={{ y: "-200%" }}
						animate={{ y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
					>
						<Typography component="h1">Практическое задание</Typography>
					</motion.div>
					<motion.div
						initial={{ y: "2000%" }}
						animate={{ y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
					>
						<Typography component="h2">Переписка с юзером</Typography>
					</motion.div>
				</motion.div>
				<motion.div className="block3-page-right-grid">
					<motion.div
						className="block3-page-icon"
						initial={{ y: "-200%" }}
						animate={{ y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
					>
						!
					</motion.div>
					<motion.div
						initial={{ x: "200%" }}
						animate={{ x: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
					>
						<Typography component="h3">Задание</Typography>
						<motion.div
							initial={{ x: "200%" }}
							animate={{ x: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 4 }}
						>
							<Typography component="h4">
								В онлайн-режиме будет смодулирована ситуация, требующая
								обсуждения с юзером.
							</Typography>
						</motion.div>
						<motion.div
							initial={{ x: "200%" }}
							animate={{ x: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 5 }}
						>
							<Typography component="h4">
								<strong>Задача</strong> - грамотно составить и отправить
								необходимое письмо и продолжить корректный диалог установления
								договоренности.
							</Typography>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.div>
			<motion.div
				className="pencil-block3"
				initial={{ opacity: 0, y: "100%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
			>
				<img src={pencilImg} alt="pencil-img" />
			</motion.div>
		</motion.div>
	);
};

export default Block3Page;
