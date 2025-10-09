import type { JSX } from "react";
import { motion } from "motion/react";
import { MouseParallaxChild } from "react-parallax-mouse";

import type { ListItem_Props } from "../../components/ListItemAnimated/ListItemAnimated";
import ListItemAnimated from "../../components/ListItemAnimated/ListItemAnimated";
import { listItemData } from "../../data/block1_2";

import { Grid, List, Typography } from "@mui/material";

import image from "../../assets/images/block1/group.jpg";
import "./block1_2PageStyles.scss";

const Block1_2Page = (): JSX.Element => {
	return (
		<motion.div
			key={location.pathname}
			className="block1-2-page"
			initial={{ x: "200%" }}
			animate={{ x: 0 }}
			exit={{ x: "-200%" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			style={{ display: "flex", flexDirection: "column" }}
		>
			<motion.div
				initial={{ y: "-100%" }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
				style={{ flex: "0 1 20%" }}
			>
				<Typography
					variant="h3"
					color="secondary.main"
					paddingTop="2vmin"
					sx={{
						fontWeight: "600",
						textShadow: "2px 2px 2px #ffffff",
					}}
				>
					Бизнес-коммуникация
				</Typography>
			</motion.div>

			<Grid
				container
				columns={{ xs: 2 }}
				spacing="20px"
				justifyContent="center"
				alignItems="center"
			>
				<motion.div
					initial={{ opacity: 0, x: "-200%" }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
					style={{
						maxWidth: "800px",
						height: "auto",
						alignSelf: "stretch",
					}}
				>
					<Typography variant="h5" component="h5">
						Особенности бизнес-коммуникации
					</Typography>
					<List>
						{listItemData.map(
							(item: ListItem_Props, i: number): JSX.Element => (
								<ListItemAnimated
									key={i}
									text={item.text}
									delayTime={item.delayTime}
								/>
							)
						)}
					</List>
				</motion.div>
				<MouseParallaxChild
					factorX={0.02}
					factorY={0.02}
					style={{ height: "100%" }}
				>
					<motion.div
						initial={{ x: "200%" }}
						animate={{ x: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
						style={{ maxWidth: "500px" }}
					>
						<img width={"500"} src={image} alt="image" />
					</motion.div>
				</MouseParallaxChild>
			</Grid>
		</motion.div>
	);
};

export default Block1_2Page;
