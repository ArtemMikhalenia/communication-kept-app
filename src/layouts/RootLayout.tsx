import type { JSX } from "react";
import { Outlet, useLocation } from "react-router";

const RootLayout = (): JSX.Element => {
	const location = useLocation();
	return <Outlet key={location.pathname} />;
};

export default RootLayout;
