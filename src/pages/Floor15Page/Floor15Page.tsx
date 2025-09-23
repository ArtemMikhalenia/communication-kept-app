import type { JSX } from "react";
import { Outlet } from "react-router";
import { motion } from "motion/react";

import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

import "./floor15PageStyles.scss";

const Floor15Page = (): JSX.Element => {
	return (
		<div className="floor15-page">
			<motion.div
				initial={{ opacity: 0, y: "-100%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
				style={{ height: "100%" }}
			>
				<Outlet />
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
				>
					<ArrowCircleLeftRoundedIcon
						sx={{
							position: "absolute",
							bottom: "20px",
							left: "30px",
							fontSize: "50px",
							color: "#00d7bd",
							transition: "all 0.5s ease 0s",
							cursor: "pointer",
							"&:hover": {
								transform: "scale(1.1)",
							},
						}}
					/>

					<ArrowCircleRightRoundedIcon
						sx={{
							position: "absolute",
							bottom: "20px",
							right: "30px",
							fontSize: "50px",
							color: "#00d7bd",
							transition: "all 0.5s ease 0s",
							cursor: "pointer",
							"&:hover": {
								transform: "scale(1.1)",
							},
						}}
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Floor15Page;
