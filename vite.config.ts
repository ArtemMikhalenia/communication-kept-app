import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	base: "/",
	plugins: [react()],
	// css: {
	// 	preprocessorOptions: {
	// 		scss: {
	// 			implementation: sass,
	// 		},
	// 	},
	// },
	build: {
		sourcemap: false,
		outDir: "dist",
		assetsDir: "assets",
		emptyOutDir: true,
	},
	server: {
		open: true,
	},
});
