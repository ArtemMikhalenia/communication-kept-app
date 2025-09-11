import { motion } from "motion/react";

import "./floor16PageStyles.scss";

const Floor16Page = () => {
	return (
		<motion.div
			className="floor16-page"
			initial={{ y: "-100%" }}
			animate={{ y: 0 }}
			exit={{ y: "100%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			Floor 16 Page
		</motion.div>
	);
};

export default Floor16Page;
