import type { AppBarProps } from "../../types/types.ts";
import { appBarStyles, toolbarStyles } from "./appBarStyles";

import { AppBar, IconButton, Toolbar } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";

const AppBarComponent = ({ toggleDrawer }: AppBarProps) => {
	return (
		<AppBar sx={appBarStyles}>
			<Toolbar sx={toolbarStyles}>
				<IconButton
					size="large"
					edge="start"
					aria-label="menu"
					color="inherit"
					onClick={toggleDrawer}
					sx={{
						width: "50px",
						padding: 0,
						borderRadius: "none",
						transition: "all 0.5s ease 0s",
						backgroundColor: "rgba(0,0,0,0)",

						":hover": {
							transform: "scale(1.1)",
							color: "secondary.main",
							backgroundColor: "rgba(0,0,0,0)",
						},
					}}
				>
					<WidgetsIcon fontSize="large" />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default AppBarComponent;
