import { motion } from "motion/react";

import "./floor17PageStyles.scss";

const Floor17Page = () => {
	return (
		<motion.div
			className="floor17-page"
			initial={{ y: "-100%" }}
			animate={{ y: 0 }}
			exit={{ y: "100%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			Floor 17 Page
		</motion.div>
	);
};

export default Floor17Page;
