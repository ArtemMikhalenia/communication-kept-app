import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import type { DashboardData } from "../interfaces/interfaces.ts";

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

const Dashboard = () => {
	const location = useLocation();
	const [background, setBackground] = useState("");
	const currentLocation: string = location.pathname.slice(1);

	const [openDrawer, setOpenDrawer] = useState(false);

	const toggleDrawer = () => setOpenDrawer(!openDrawer);

	const dashboardData: DashboardData[] = [
		{
			pageTitle: "Вызвать лифт",
			link: "/hall/elevator",
		},
	];

	const DrawerList = (
		<List>
			{dashboardData.map((link, id) => (
				<Link to={link.link} key={id} onClick={toggleDrawer}>
					<ListItemButton sx={listItemButtonStyles}>
						<ListItemText primary={link.pageTitle} sx={listItemColorStyles} />
					</ListItemButton>
				</Link>
			))}
		</List>
	);

	useEffect(() => {
		if (currentLocation === "hall") {
			setBackground(hallBackground);
		} else if (currentLocation === "hall/elevator") {
			setBackground(elevatorBackground);
		} else if (currentLocation === "hall/floor15") {
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
				gridTemplateRows: "50px 1fr",
				gap: "10px",
				height: "100vh",
				backgroundImage: `url(${background})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<AppBarComponent toggleDrawer={toggleDrawer} />

			<SwipeableDrawer
				anchor="left"
				open={openDrawer}
				onClose={toggleDrawer}
				onOpen={toggleDrawer}
				sx={swipeableDrawerStyles}
			>
				{DrawerList}
			</SwipeableDrawer>
			<AnimatePresence mode="wait">
				<Container
					component="main"
					disableGutters
					sx={mainBlockStyles}
					maxWidth={false}
				>
					<Outlet />
				</Container>
			</AnimatePresence>
		</motion.div>
	);
};

export default Dashboard;
