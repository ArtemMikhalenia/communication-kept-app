import { Link } from "react-router";
import { motion } from "motion/react";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import "./elevatorStyles.scss";

const Elevator = () => {
	return (
		<motion.div
			key="elevator-page"
			className="elevator-page"
			initial={{ opacity: 0, y: "-100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className="elevator-buttons">
				<div className="main-buttons">
					<span className="elevator-btn inactive">14</span>
					<Link to="/hall/floor15" className="elevator-btn">
						15
					</Link>
					<Link to="/hall/floor16" className="elevator-btn">
						16
					</Link>

					<Link to="/hall/floor17" className="elevator-btn">
						17
					</Link>
					<span className="elevator-btn inactive">10</span>
					<span className="elevator-btn inactive">11</span>
					<span className="elevator-btn inactive">12</span>
					<span className="elevator-btn inactive">13</span>
					<span className="elevator-btn inactive">6</span>
					<span className="elevator-btn inactive">7</span>
					<span className="elevator-btn inactive">8</span>
					<span className="elevator-btn inactive">9</span>
					<span className="elevator-btn inactive">2</span>
					<span className="elevator-btn inactive">3</span>
					<span className="elevator-btn inactive">4</span>
					<span className="elevator-btn inactive">5</span>
					<Link to="/hall" className="elevator-btn">
						1
					</Link>
					<span className="elevator-btn inactive elevator-open">
						<ArrowLeftIcon sx={{ fontSize: "40px" }} />
						<ArrowRightIcon sx={{ fontSize: "40px" }} />
					</span>
					<span className="elevator-btn inactive elevator-close">
						<ArrowRightIcon sx={{ fontSize: "40px" }} />
						<ArrowLeftIcon sx={{ fontSize: "40px" }} />
					</span>
					<span className="elevator-btn inactive elevator-call">
						<NotificationsActiveIcon sx={{ fontSize: "30px" }} />
					</span>
				</div>
			</div>
		</motion.div>
	);
};

export default Elevator;
