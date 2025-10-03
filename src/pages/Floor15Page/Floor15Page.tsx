import { useEffect, useState, type JSX } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";

import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const Floor15Page = (): JSX.Element => {
	const location = useLocation();
	const [isLinkPrevVisible, setIsLinkPrevVisible] = useState(true);
	const [isLinkNextVisible, setIsLinkNextVisible] = useState(true);
	const [prevPath, setPrevPath] = useState("");
	const [nextPath, setNextPath] = useState("");

	useEffect(() => {
		switch (location.pathname) {
			case "/hall/floor15":
				setNextPath("block1_2");
				setIsLinkPrevVisible(false);
				break;
			case "/hall/floor15/block1_2":
				setPrevPath("/hall/floor15");
				setNextPath("block1_3");
				setIsLinkPrevVisible(true);
				break;
			case "/hall/floor15/block1_3":
				setPrevPath("/hall/floor15/block1_2");
				setNextPath("block1_4");
				setIsLinkPrevVisible(true);
				break;
			case "/hall/floor15/block1_4":
				setPrevPath("/hall/floor15/block1_3");
				setNextPath("block1_5");
				setIsLinkPrevVisible(true);
				break;
			case "/hall/floor15/block1_5":
				setPrevPath("/hall/floor15/block1_4");
				setNextPath("block1_6");
				setIsLinkPrevVisible(true);
				break;
			case "/hall/floor15/block1_6":
				setPrevPath("/hall/floor15/block1_5");
				setNextPath("block1_7");
				setIsLinkPrevVisible(true);
				break;
			case "/hall/floor15/block1_7":
				setPrevPath("/hall/floor15/block1_6");
				setNextPath("block1_8");
				setIsLinkPrevVisible(true);
				break;
			case "/hall/floor15/block1_8":
				setPrevPath("/hall/floor15/block1_7");
				setNextPath("block1_9");
				setIsLinkPrevVisible(true);
				break;
			case "/hall/floor15/block1_9":
				setPrevPath("/hall/floor15/block1_8");
				setNextPath("block1_10");
				setIsLinkPrevVisible(true);
				break;
			case "/hall/floor15/block1_10":
				setPrevPath("/hall/floor15/block1_9");
				// setNextPath("block1_10");
				setIsLinkPrevVisible(true);
				setIsLinkNextVisible(false);
				break;
			default:
				break;
		}
	}, [location.pathname]);

	return (
		<div className="floor15-page" style={{ height: "100%" }}>
			<AnimatePresence mode="wait">
				<motion.div
					key={location.pathname}
					initial={{ opacity: 0, y: "-100%" }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: "100%" }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
					style={{ height: "100%" }}
				>
					<Outlet />
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
					>
						{isLinkPrevVisible && (
							<Link to={prevPath}>
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
							</Link>
						)}
						{isLinkNextVisible && (
							<Link to={nextPath}>
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
							</Link>
						)}
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Floor15Page;
