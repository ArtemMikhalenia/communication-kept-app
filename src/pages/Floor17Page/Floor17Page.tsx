import type { JSX } from "react";
import { motion } from "motion/react";

import "./floor17PageStyles.scss";
import { Typography } from "@mui/material";

const Floor17Page = (): JSX.Element => {
	return (
		<div className="floor17-page">
			<motion.div
				initial={{ opacity: 0, y: "-100%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
			>
				<Typography variant="h3" color="secondary.main">
					Блок 3 - Ситуационная модель - переписка с юзером
				</Typography>
			</motion.div>
		</div>
	);
};

export default Floor17Page;
