import "../src/assets/styles/resetStyles.css";
import "../src/assets/styles/global.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

	tags: ["autodocs"],
};

export default preview;
