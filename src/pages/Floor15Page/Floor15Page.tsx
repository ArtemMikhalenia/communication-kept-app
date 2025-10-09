import { useEffect, useState, type JSX } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { motion } from "motion/react";
import {
	MouseParallaxChild,
	MouseParallaxContainer,
} from "react-parallax-mouse";

import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

import "./floor15PageStyles.scss";
import AppBarComponent from "../../components/AppBar/AppBar";
import { Container } from "@mui/material";

const Floor15Page = (): JSX.Element => {
	const location = useLocation();
	const [isLinkPrevVisible, setIsLinkPrevVisible] = useState(true);
	const [isLinkNextVisible, setIsLinkNextVisible] = useState(true);
	const [prevPath, setPrevPath] = useState("");
	const [nextPath, setNextPath] = useState("");

	useEffect(() => {
		switch (location.pathname) {
			case "/floor15/block1_1":
				setNextPath("block1_2");
				setIsLinkPrevVisible(false);
				break;
			case "/floor15/block1_2":
				setPrevPath("/floor15/block1_1");
				setNextPath("block1_3");
				setIsLinkPrevVisible(true);
				break;
			case "/floor15/block1_3":
				setPrevPath("/floor15/block1_2");
				setNextPath("block1_4");
				setIsLinkPrevVisible(true);
				break;
			case "/floor15/block1_4":
				setPrevPath("/floor15/block1_3");
				setNextPath("block1_5");
				setIsLinkPrevVisible(true);
				break;
			case "/floor15/block1_5":
				setPrevPath("/floor15/block1_4");
				setNextPath("block1_6");
				setIsLinkPrevVisible(true);
				break;
			case "/floor15/block1_6":
				setPrevPath("/floor15/block1_5");
				setNextPath("block1_7");
				setIsLinkPrevVisible(true);
				break;
			case "/floor15/block1_7":
				setPrevPath("/floor15/block1_6");
				setNextPath("block1_8");
				setIsLinkPrevVisible(true);
				break;
			case "/floor15/block1_8":
				setPrevPath("/floor15/block1_7");
				setNextPath("block1_9");
				setIsLinkPrevVisible(true);
				break;
			case "/floor15/block1_9":
				setPrevPath("/floor15/block1_8");
				setNextPath("block1_10");
				setIsLinkPrevVisible(true);
				break;
			case "/floor15/block1_10":
				setPrevPath("/floor15/block1_9");
				setIsLinkPrevVisible(true);
				setIsLinkNextVisible(false);
				break;
			default:
				break;
		}
	}, [location.pathname]);

	return (
		<motion.div
			className="floor15-page-layout"
			// initial={{ opacity: 0, y: "-100%" }}
			// animate={{ opacity: 1, y: 0 }}
			// exit={{ opacity: 0, y: "100%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<AppBarComponent
				pageTitleName={"Блок 1 - Теория и практика делового общения в ADC"}
			/>
			<MouseParallaxContainer
				className="parallax"
				containerStyle={{ height: "100%" }}
			>
				<Container
					component="main"
					className="floor15-page-container"
					disableGutters
					key={location.pathname}
					maxWidth={false}
				>
					<MouseParallaxChild
						factorX={0.01}
						factorY={0.01}
						style={{ height: "100%" }}
					>
						<div className="floor15-page" key={location.pathname}>
							<Outlet />
							<motion.div
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: 1, duration: 0.5 },
								}}
								exit={{ opacity: 0, transition: { delay: 0, duration: 0.5 } }}
							>
								{isLinkPrevVisible && (
									<Link to={prevPath}>
										<ArrowCircleLeftRoundedIcon className="floor15-page-icon-left" />
									</Link>
								)}
								{isLinkNextVisible && (
									<Link to={nextPath}>
										<ArrowCircleRightRoundedIcon className="floor15-page-icon-right" />
									</Link>
								)}
							</motion.div>
						</div>
					</MouseParallaxChild>
				</Container>
			</MouseParallaxContainer>
		</motion.div>
	);
};

export default Floor15Page;
