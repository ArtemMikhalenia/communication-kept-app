import { alpha } from "@mui/material";
import { grey } from "@mui/material/colors";
import type {
	appBarStylesProps,
	typographyStylesProps,
} from "../../types/types";

export const appBarStyles1: appBarStylesProps = {
	position: "static",
	background: alpha(grey[800], 0.5),
	backdropFilter: "blur(5px)",
	height: "64px",
	minHeight: "64px",
};

export const appBarStyles2: appBarStylesProps = {
	position: "static",
	background: "#a39cffb3",
	backdropFilter: "blur(5px)",
	height: "64px",
	minHeight: "64px",
};

export const appBarStyles3: appBarStylesProps = {
	position: "static",
	background: "#ffffffcc",
	backdropFilter: "blur(5px)",
	height: "64px",
	minHeight: "64px",
};

export const toolbarStyles = {
	color: "secondary.main",
	minHeight: "64px",
	height: "64px",
};

export const typographyStyles1: typographyStylesProps = {
	flexGrow: 1,
	fontSize: "30px",
	fontWeight: 700,
};

export const typographyStyles2: typographyStylesProps = {
	flexGrow: 1,
	fontSize: "30px",
	fontWeight: 700,
	color: "#ffffffcc",
};

export const typographyStyles3: typographyStylesProps = {
	flexGrow: 1,
	fontSize: "30px",
	fontWeight: 700,
	color: "#531a56",
};
