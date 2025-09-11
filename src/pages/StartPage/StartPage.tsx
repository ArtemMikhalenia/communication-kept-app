import { Link } from "react-router-dom";

import { motion } from "motion/react";

import "./startPageStyles.scss";

const StartPage = () => {
	return (
		<motion.div
			className="start-page"
			initial={{ opacity: 0, y: "-100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className="start-page-content">
				<Link to="/hall" className="arrow-enter">
					<span></span>
					<span></span>
					<span></span>
				</Link>
			</div>
		</motion.div>
	);
};

export default StartPage;
