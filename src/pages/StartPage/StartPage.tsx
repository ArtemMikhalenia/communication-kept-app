import type { JSX } from "react";
import { Link } from "react-router-dom";

import { motion } from "motion/react";

import { Typography } from "@mui/material";

import "./startPageStyles.scss";

const StartPage = (): JSX.Element => {
	return (
		<motion.div
			className="start-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className="start-page-content">
				<motion.div
					initial={{ opacity: 0, y: "-100%" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
				>
					<Typography
						variant="h1"
						color="secondary.main"
						className="start-header"
					>
						Коммуникация в ADC
					</Typography>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: "100%" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
				>
					<Link to="/hall" className="arrow-enter">
						<span></span>
						<span></span>
						<span></span>
					</Link>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default StartPage;
