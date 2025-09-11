import { motion } from "motion/react";

import "./floor15PageStyles.scss";

const Floor15Page = () => {
	return (
		<motion.div
			className="floor15-page"
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			exit={{ y: "200%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			Floor 15 Page
		</motion.div>
	);
};

export default Floor15Page;
