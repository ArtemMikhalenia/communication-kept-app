import type { JSX } from "react";
import { motion } from "motion/react";
import { MouseParallaxChild } from "react-parallax-mouse";

import { Box, Grid, Typography } from "@mui/material";

import bulbImg from "../../assets/images/block1/block1_5/bulb.png";
import pencilImg from "../../assets/images/pencil/9.png";

import "./block1_8PageStyles.scss";

const Block1_8Page = (): JSX.Element => {
	return (
		<MouseParallaxChild
			factorX={0.01}
			factorY={0.01}
			style={{ height: "100%" }}
		>
			<motion.div
				className="block1-8-page"
				initial={{ y: "-100%" }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
				style={{ display: "flex", flexDirection: "column" }}
			>
				<motion.div
					initial={{ y: "-100%" }}
					animate={{ y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
					style={{ flex: "0 1 20%" }}
				>
					<Typography
						variant="h2"
						color="#ff605cff"
						paddingTop="20px"
						fontWeight={600}
						sx={{
							textShadow: "1px 1px 1px #ffffff",
						}}
					>
						Важно!
					</Typography>
				</motion.div>
				<Grid
					container
					columns={{ xs: 2 }}
					spacing={4}
					justifyContent="space-evenly"
					alignItems="center"
				>
					<Box
						style={{
							maxWidth: "750px",
							height: "auto",
							alignSelf: "stretch",
						}}
					>
						<motion.div
							initial={{ x: "-200%" }}
							animate={{ x: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
						>
							<Typography
								component="h5"
								sx={{
									textShadow: "none",
									marginBottom: "30px",
									textAlign: "left",
								}}
							>
								Переписки с юзером
							</Typography>
						</motion.div>
						<motion.div
							initial={{ x: "-200%" }}
							animate={{ x: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 4 }}
						>
							<Typography
								variant="h6"
								color="secondary.main"
								fontWeight={600}
								fontSize={"23px"}
								textAlign="justify"
							>
								Ассистенты вне букинга не могут вести переписку с юзером без
								участия ТЛ/АТЛ, т.к. все письма должны быть согласованы. Также
								ассистенты не могут сориентировать юзера по собственной загрузке
								или принимать дополнительные задания без ведома ТЛ/АТЛ.
							</Typography>
						</motion.div>
						<motion.div
							initial={{ x: "-200%" }}
							animate={{ x: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 5 }}
						>
							<Typography
								variant="h6"
								color="secondary.main"
								fontWeight={600}
								fontSize={"23px"}
								textAlign="justify"
							>
								В случае, если юзер написал вам первым с таким вопросом, следует
								ответить, что эти вопросы необходимо согласовывать с ТЛ/АТЛ и
								далее обратиться к старшим коллегам.
							</Typography>
						</motion.div>
					</Box>
					<MouseParallaxChild
						factorX={0.02}
						factorY={0.02}
						style={{ height: "100%" }}
					>
						<motion.div
							initial={{ x: "200%" }}
							animate={{ x: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 6 }}
							style={{ maxWidth: "500px" }}
						>
							<img width={"340"} src={bulbImg} alt="bulb-image" />
						</motion.div>
					</MouseParallaxChild>
				</Grid>
				<motion.div
					className="pencil-block1-8"
					initial={{ opacity: 0, y: "100%" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 6 }}
				>
					<img src={pencilImg} alt="pencil-img" />
				</motion.div>
			</motion.div>
		</MouseParallaxChild>
	);
};

export default Block1_8Page;
