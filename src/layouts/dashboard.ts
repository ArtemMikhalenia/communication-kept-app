import { alpha } from "@mui/material";
import { grey } from "@mui/material/colors";

export const listItemButtonStyles = {
	fontSize: "16px",
	"&:hover": {
		backgroundColor: "secondary.light",
		span: {
			color: grey[800],
		},
		svg: {
			color: grey[800],
		},
	},
};

export const listItemColorStyles = {
	color: "secondary.main",
};

export const swipeableDrawerStyles = {
	"& .MuiDrawer-paper": {
		justifyContent: "space-between",
		height: "100vh",
		background: alpha(grey[800], 0.5),
		backdropFilter: "blur(3px)",
		boxShadow: "none",
		color: "secondary.light",
		scrollbarWidth: "none",
		overflowY: "scroll",
	},
};

export const buttonDrawerStyles = {
	margin: "8px 16px",
	fontSize: "16px",
};

export const mainBlockStyles = {
	maxWidth: "100%",
	width: "100%",
	padding: "0px 15px 100px",
	overflowY: "scroll",
	scrollbarWidth: "none",
};
