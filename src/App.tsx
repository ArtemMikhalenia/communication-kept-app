import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import { AnimatePresence } from "framer-motion";

import StartPage from "./pages/StartPage/StartPage";

import RootLayout from "./layouts/RootLayout";
import Dashboard from "./layouts/Dashboard.tsx";

import Floor15Page from "./pages/Floor15Page/Floor15Page.tsx";
import Floor16Page from "./pages/Floor16Page/Floor16Page.tsx";
import Floor17Page from "./pages/Floor17Page/Floor17Page.tsx";
import Elevator from "./pages/Elevator/Elevator.tsx";
import Hall from "./pages/Hall/Hall.tsx";

import "./App.scss";

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<StartPage />} />
				</Route>

				<Route path="/hall" element={<Dashboard />}>
					<Route index element={<Hall />} />
					<Route path="elevator" element={<Elevator />} />
					<Route path="floor15" element={<Floor15Page />} />
					<Route path="floor16" element={<Floor16Page />} />
					<Route path="floor17" element={<Floor17Page />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
}

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<AnimatedRoutes />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
