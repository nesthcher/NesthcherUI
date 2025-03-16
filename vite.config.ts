import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "nesthcher-ui",
			formats: ["es", "umd"],
			fileName: (format) => `nesthcher-ui.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDom",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
		},
	},
});
