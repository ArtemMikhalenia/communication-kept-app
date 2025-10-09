import type { JSX } from "react";

import { motion } from "motion/react";

import { Typography } from "@mui/material";

import "./lastPageStyles.scss";

const LastPage = (): JSX.Element => {
	return (
		<motion.div
			className="last-page"
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className="last-page-content">
				<motion.div
					initial={{ opacity: 0, y: "100%" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
				>
					<Typography
						variant="h1"
						className="last-header"
					>
						Спасибо за внимание!
					</Typography>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default LastPage;
