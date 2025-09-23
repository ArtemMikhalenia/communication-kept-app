import type { JSX } from "react";
import { motion } from "motion/react";

import "./floor16PageStyles.scss";
import { Typography } from "@mui/material";

const Floor16Page = (): JSX.Element => {
	return (
		<div className="floor16-page">
			<motion.div
				initial={{ opacity: 0, y: "-100%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
			>
				<Typography variant="h3" color="secondary.main">
					Блок 2 - Практическое задание по коммуникации
				</Typography>
			</motion.div>
		</div>
	);
};

export default Floor16Page;
