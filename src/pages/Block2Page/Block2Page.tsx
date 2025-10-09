import type { JSX } from "react";
import { motion } from "motion/react";

import { Typography } from "@mui/material";

import pencilImg from "../../assets/images/pencil/5.png";

import "./block2PageStyles.scss";

const Block2Page = (): JSX.Element => {
	return (
		<motion.div
			className="block2-page"
			initial={{ y: "-100%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
		>
			<motion.div className="block2-page-grid">
				<motion.div
					initial={{ x: "-200%" }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
					className="block2-page-left-grid"
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
						<Typography component="h2">Составление письма юзеру</Typography>
					</motion.div>
				</motion.div>
				<motion.div className="block2-page-right-grid">
					<motion.div
						className="block2-page-icon"
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
						<Typography component="h3">Задание в группах</Typography>
						<motion.div
							initial={{ x: "200%" }}
							animate={{ x: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 4 }}
						>
							<Typography component="h4">
								Все участники тренинга будут разделены на группы. Каждая группа
								получит свой список вводных данных и инструкцию.
							</Typography>
						</motion.div>
						<motion.div
							initial={{ x: "200%" }}
							animate={{ x: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 5 }}
						>
							<Typography component="h4">
								<strong>Задача</strong> - составить в группах письмо юзеру с
								учетом всех вводных данных.
							</Typography>
						</motion.div>
						<motion.div
							initial={{ x: "200%" }}
							animate={{ x: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 6 }}
						>
							<Typography component="h4">
								Время на выполнение - <strong>5 минут</strong>.
							</Typography>
						</motion.div>
						<motion.div
							initial={{ x: "200%" }}
							animate={{ x: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 7 }}
						>
							<Typography component="h4">
								По окончании работы представитель от каждой группы представит
								готовое письмо к полученной инструкции.
							</Typography>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.div>
			<motion.div
				className="pencil-block2"
				initial={{ opacity: 0, y: "100%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
			>
				<img src={pencilImg} alt="pencil-img" />
			</motion.div>
		</motion.div>
	);
};

export default Block2Page;
