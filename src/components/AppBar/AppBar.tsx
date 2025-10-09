import { useEffect, useState, type JSX } from "react";
import type {
	AppBarProps,
	appBarStylesProps,
	typographyStylesProps,
} from "../../types/types.ts";
import {
	appBarStyles1,
	appBarStyles2,
	appBarStyles3,
	toolbarStyles,
	typographyStyles1,
	typographyStyles2,
	typographyStyles3,
} from "./appBarStyles";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ElevatorRoundedIcon from "@mui/icons-material/ElevatorRounded";
import { Link } from "react-router";

const AppBarComponent = ({ pageTitleName }: AppBarProps): JSX.Element => {
	const [stylesBar, setStylesBar] = useState<appBarStylesProps>();
	const [stylesTypography, setStylesTypography] =
		useState<typographyStylesProps>();
	const [iconColor, setIconColor] = useState<string>();

	useEffect(() => {
		switch (pageTitleName) {
			case "Блок 1 - Теория и практика делового общения в ADC":
				setStylesBar(appBarStyles1);
				setStylesTypography(typographyStyles1);
				setIconColor("#00d7bd");
				break;
			case "Блок 2 - Практическое задание по коммуникации":
				setStylesBar(appBarStyles2);
				setStylesTypography(typographyStyles2);
				setIconColor("#ffffffff");
				break;

			case "Блок 3 - Ситуационная модель - переписка с юзером":
				setStylesBar(appBarStyles3);
				setStylesTypography(typographyStyles3);
				setIconColor("#531a56");
				break;
			case "":
				setStylesBar(appBarStyles1);
				setStylesTypography(typographyStyles1);
				setIconColor("#00d7bd");
				break;
		}
	}, [pageTitleName]);

	return (
		<AppBar sx={stylesBar}>
			<Toolbar sx={toolbarStyles}>
				<IconButton
					size="small"
					edge="start"
					aria-label="menu"
					color="inherit"
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
					<Link to="/elevator" style={{ color: iconColor }}>
						<ElevatorRoundedIcon fontSize="large" />
					</Link>
				</IconButton>
				<Typography component="h1" sx={stylesTypography}>
					{pageTitleName}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default AppBarComponent;
