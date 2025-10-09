import type { JSX } from "react";
import { motion } from "motion/react";
import {
	MouseParallaxChild,
	MouseParallaxContainer,
} from "react-parallax-mouse";

import { Outlet, useLocation } from "react-router";
import AppBarComponent from "../../components/AppBar/AppBar";
import { Container } from "@mui/material";

import "./floor17PageStyles.scss";

const Floor17Page = (): JSX.Element => {
	const location = useLocation();
	return (
		<motion.div
			className="floor17-page-layout"
			initial={{ opacity: 0, y: "-100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<AppBarComponent
				pageTitleName={"Блок 3 - Ситуационная модель - переписка с юзером"}
			/>
			<MouseParallaxContainer
				className="parallax"
				containerStyle={{ height: "100%" }}
			>
				<Container
					component="main"
					className="floor17-page-container"
					disableGutters
					key={location.pathname}
					maxWidth={false}
				>
					<MouseParallaxChild
						factorX={0.01}
						factorY={0.01}
						style={{ height: "100%" }}
					>
						<div className="floor17-page" style={{ height: "100%" }}>
							<motion.div
								key={location.pathname}
								initial={{ opacity: 0, y: "-100%" }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: "100%" }}
								transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
								style={{ height: "100%" }}
							>
								<Outlet />
							</motion.div>
						</div>
					</MouseParallaxChild>
				</Container>
			</MouseParallaxContainer>
		</motion.div>
	);
};

export default Floor17Page;
