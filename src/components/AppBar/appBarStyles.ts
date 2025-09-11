import { alpha } from "@mui/material";
import { grey } from "@mui/material/colors";

export const appBarStyles = {
	position: "static",
	background: alpha(grey[800], 0),
	backdropFilter: "blur(5px)",
	height: "60px",
	minHeight: "60px",
};

export const toolbarStyles = {
	color: "secondary.main",
	minHeight: "60px",
	height: "60px",
};

export const typographyStyles = {
	flexGrow: 1,
	fontSize: "20px",
	fontWeight: 700,
};
