import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		secondary: {
			main: "rgba(0,215,189,1)",
			light: "rgba(163,156,255,1)",
			dark: "rgba(83,26,86,1)",
		},
		// custom: {
		// 	main: "",
		// },
	},
	typography: {
		fontFamily: ["Manrope, sans-serif", "Caveat, cursive"].join(","),
	},
});
