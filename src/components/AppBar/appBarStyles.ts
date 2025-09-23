import { alpha } from "@mui/material";
import { grey } from "@mui/material/colors";

export const appBarStyles = {
	position: "static",
	background: alpha(grey[800], 0.5),
	backdropFilter: "blur(5px)",
	height: "64px",
	minHeight: "64px",
};

export const toolbarStyles = {
	color: "secondary.main",
	minHeight: "64px",
	height: "64px",
};

export const typographyStyles = {
	flexGrow: 1,
	fontSize: "30px",
	fontWeight: 700,
};
