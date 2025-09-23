import type { JSX } from "react";
import type { AppBarProps } from "../../types/types.ts";
import { appBarStyles, toolbarStyles, typographyStyles } from "./appBarStyles";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";

const AppBarComponent = ({
	pageTitleName,
	toggleDrawer,
}: AppBarProps): JSX.Element => {
	return (
		<AppBar sx={appBarStyles}>
			<Toolbar sx={toolbarStyles}>
				<IconButton
					size="small"
					edge="start"
					aria-label="menu"
					color="inherit"
					onClick={toggleDrawer}
					sx={{
						width: "30px",
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
				<Typography component="h1" sx={typographyStyles}>
					{pageTitleName}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default AppBarComponent;
