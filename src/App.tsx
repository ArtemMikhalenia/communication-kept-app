import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import { AnimatePresence } from "framer-motion";

import StartPage from "./pages/StartPage/StartPage";

import RootLayout from "./layouts/RootLayout";
import Dashboard from "./layouts/Dashboard.tsx";

import Floor15Page from "./pages/Floor15Page/Floor15Page.tsx";
import Block1_1Page from "./pages/Block1_1Page/Block1_1Page.tsx";
import Block1_2Page from "./pages/Block1_2Page/Block1_2Page.tsx";
import Block1_3Page from "./pages/Block1_3Page/Block1_3Page.tsx";
import Block1_4Page from "./pages/Block1_4Page/Block1_4Page.tsx";
import Block1_5Page from "./pages/Block1_5Page/Block1_5Page.tsx";
import Block1_6Page from "./pages/Block1_6Page/Block1_6Page.tsx";
import Block1_7Page from "./pages/Block1_7Page/Block1_7Page.tsx";
import Block1_8Page from "./pages/Block1_8Page/Block1_8Page.tsx";
import Block1_9Page from "./pages/Block1_9Page/Block1_9Page.tsx";
import Block1_10Page from "./pages/Block1_10Page/Block1_10Page.tsx";

import Floor16Page from "./pages/Floor16Page/Floor16Page.tsx";
import Floor17Page from "./pages/Floor17Page/Floor17Page.tsx";
import Elevator from "./pages/Elevator/Elevator.tsx";
import Hall from "./pages/Hall/Hall.tsx";
import type { JSX } from "react";

function AnimatedRoutes() {
	const location = useLocation();
	// const key = location.pathname.split("/")[1] || "root";

	const getRouteKey = (pathname: string) => {
		const segments = pathname.split("/").filter((segment) => segment !== "");
		if (segments.length <= 1) return pathname;
		return `/${segments.slice(0, 2).join("/")}`;
	};

	const routeKey = getRouteKey(location.pathname);

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={routeKey}>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<StartPage />} />
				</Route>

				<Route path="/hall" element={<Dashboard />}>
					<Route index element={<Hall />} />
					<Route path="elevator" element={<Elevator />} />

					<Route path="floor15" element={<Floor15Page />}>
						<Route index element={<Block1_1Page />} />
						<Route path="block1_2" element={<Block1_2Page />} />
						<Route path="block1_3" element={<Block1_3Page />} />
						<Route path="block1_4" element={<Block1_4Page />} />
						<Route path="block1_5" element={<Block1_5Page />} />
						<Route path="block1_6" element={<Block1_6Page />} />
						<Route path="block1_7" element={<Block1_7Page />} />
						<Route path="block1_8" element={<Block1_8Page />} />
						<Route path="block1_9" element={<Block1_9Page />} />
						<Route path="block1_10" element={<Block1_10Page />} />
					</Route>

					<Route path="floor16" element={<Floor16Page />} />
					<Route path="floor17" element={<Floor17Page />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
}

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<AnimatedRoutes />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
