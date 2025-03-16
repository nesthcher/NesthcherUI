import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-essentials",
		"@storybook/addon-a11y",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],

	docs: {
		defaultName: "Документация",
		autodocs: true,
	},

	framework: {
		name: "@storybook/react-vite",
		options: {},
	},

	typescript: {
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false,
			},
		},
	},
};
export default config;
