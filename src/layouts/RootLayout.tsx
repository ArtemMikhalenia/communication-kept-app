import type { JSX } from "react";
import { Outlet } from "react-router";

const RootLayout = (): JSX.Element => {
	return <Outlet />;
};

export default RootLayout;
