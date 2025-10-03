import { useEffect, useState, type JSX } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import type { DashboardData } from "../interfaces/interfaces.ts";

import { MouseParallaxContainer } from "react-parallax-mouse";

import AppBarComponent from "../components/AppBar/AppBar.tsx";

import {
	Container,
	List,
	ListItemButton,
	ListItemText,
	SwipeableDrawer,
} from "@mui/material";
import {
	listItemButtonStyles,
	listItemColorStyles,
	mainBlockStyles,
	swipeableDrawerStyles,
} from "./dashboard";

import hallBackground from "../assets/images/backgrounds/hall.jpg";
import elevatorBackground from "../assets/images/backgrounds/elevator.jpg";
import floor15Background from "../assets/images/backgrounds/15_floor.jpg";
import floor16Background from "../assets/images/backgrounds/16_floor.jpg";
import floor17Background from "../assets/images/backgrounds/17_floor.jpg";

const Dashboard = (): JSX.Element => {
	const location = useLocation();
	const [background, setBackground] = useState("");
	const currentLocation: string = location.pathname.slice(1);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [pageTitle, setPageTitle] = useState("");

	const toggleDrawer = (): void => setOpenDrawer(!openDrawer);

	const locationName = location.pathname;

	useEffect(() => {
		switch (locationName) {
			case "/hall/floor15":
				setPageTitle("Блок 1 - Теория и практика делового общения в ADC");
				break;
			case "/hall/floor15/block1_2":
				setPageTitle("Блок 1 - Теория и практика делового общения в ADC");
				break;
			case "/hall/floor15/block1_3":
				setPageTitle("Блок 1 - Теория и практика делового общения в ADC");
				break;
			case "/hall/floor15/block1_4":
				setPageTitle("Блок 1 - Теория и практика делового общения в ADC");
				break;
			case "/hall/floor15/block1_5":
				setPageTitle("Блок 1 - Теория и практика делового общения в ADC");
				break;
			case "/hall/floor15/block1_6":
				setPageTitle("Блок 1 - Теория и практика делового общения в ADC");
				break;
			case "/hall/floor15/block1_7":
				setPageTitle("Блок 1 - Теория и практика делового общения в ADC");
				break;
			case "/hall/floor15/block1_8":
				setPageTitle("Блок 1 - Теория и практика делового общения в ADC");
				break;
			case "/hall/floor15/block1_9":
				setPageTitle("Блок 1 - Теория и практика делового общения в ADC");
				break;
			case "/hall/floor15/block1_10":
				setPageTitle("Блок 1 - Теория и практика делового общения в ADC");
				break;
			case "/hall/floor16":
				setPageTitle("Блок 2 - Практическое задание по коммуникации");
				break;
			case "/hall/floor17":
				setPageTitle("Блок 3 - Ситуационная модель - переписка с юзером");
				break;
			default:
				break;
		}
	}, [location.pathname]);

	const dashboardData: DashboardData[] = [
		{
			pageTitle: "Вызвать лифт",
			link: "/hall/elevator",
		},
	];

	const DrawerList = (
		<List>
			{dashboardData.map(
				(item: DashboardData, id: number): JSX.Element => (
					<Link to={item.link} key={id} onClick={toggleDrawer}>
						<ListItemButton sx={listItemButtonStyles}>
							<ListItemText primary={item.pageTitle} sx={listItemColorStyles} />
						</ListItemButton>
					</Link>
				)
			)}
		</List>
	);

	useEffect(() => {
		if (currentLocation === "hall") {
			setBackground(hallBackground);
		} else if (currentLocation === "hall/elevator") {
			setBackground(elevatorBackground);
		} else if (
			currentLocation === "hall/floor15" ||
			currentLocation === "hall/floor15/block1_2" ||
			currentLocation === "hall/floor15/block1_3" ||
			currentLocation === "hall/floor15/block1_4" ||
			currentLocation === "hall/floor15/block1_5" ||
			currentLocation === "hall/floor15/block1_6" ||
			currentLocation === "hall/floor15/block1_7" ||
			currentLocation === "hall/floor15/block1_8" ||
			currentLocation === "hall/floor15/block1_9" ||
			currentLocation === "hall/floor15/block1_10"
		) {
			setBackground(floor15Background);
		} else if (currentLocation === "hall/floor16") {
			setBackground(floor16Background);
		} else if (currentLocation === "hall/floor17") {
			setBackground(floor17Background);
		}
	}, [location]);

	return (
		<motion.div
			className="app-layout"
			initial={{ opacity: 0, y: "-100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			style={{
				display: "grid",
				gridTemplateColumns: "1fr",
				gridTemplateRows: "64px 1fr",
				height: "100vh",
				backgroundImage: `url(${background})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<AppBarComponent pageTitleName={pageTitle} toggleDrawer={toggleDrawer} />

			<SwipeableDrawer
				anchor="left"
				open={openDrawer}
				onClose={toggleDrawer}
				onOpen={toggleDrawer}
				sx={swipeableDrawerStyles}
			>
				{DrawerList}
			</SwipeableDrawer>
			<MouseParallaxContainer>
				<AnimatePresence mode="wait">
					<Container
						component="main"
						disableGutters
						sx={mainBlockStyles}
						maxWidth={false}
					>
						<Outlet key={location.pathname} />
					</Container>
				</AnimatePresence>
			</MouseParallaxContainer>
		</motion.div>
	);
};

export default Dashboard;
