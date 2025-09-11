import { motion } from "motion/react";

import "./hallStyles.scss";
import {
	Box,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import ExpandCircleDownTwoToneIcon from "@mui/icons-material/ExpandCircleDownTwoTone";

const Hall = () => {
	return (
		<motion.div
			key="hall-page"
			className="hall-page"
			initial={{ y: "-100%" }}
			animate={{ y: 0 }}
			exit={{ y: "100%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<Box component="div" className="agenda">
				<Grid>
					<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="h6">
						План тренинга:
					</Typography>
					<List>
						<ListItem>
							<ListItemAvatar>
								<ExpandCircleDownTwoToneIcon />
							</ListItemAvatar>
							<ListItemText primary="Блок 1" />
						</ListItem>
						<ListItem>
							<ListItemAvatar>
								<ExpandCircleDownTwoToneIcon />
							</ListItemAvatar>
							<ListItemText primary="Блок 2" />
						</ListItem>
						<ListItem>
							<ListItemAvatar>
								<ExpandCircleDownTwoToneIcon />
							</ListItemAvatar>
							<ListItemText primary="Блок 3" />
						</ListItem>
					</List>
				</Grid>
			</Box>
		</motion.div>
	);
};

export default Hall;
