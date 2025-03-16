import type { Meta, StoryObj } from "@storybook/react";

import { hideControls } from "../../../storybook/controls";
import { Button } from "../Button";

import { Group } from "./Group";

const meta = {
	title: "Компоненты/Блоки/Group",
	component: Group,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: "Объединение элементов интерфейса.",
			},
		},
	},
	argTypes: {
		...hideControls("renderChildren", "ref"),
	},
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RoundedWidth: Story = {
	args: {
		renderChildren: () => (
			<>
				<Button renderChildren={() => "Первый"} />
				<Button renderChildren={() => "Второй"} />
				<Button renderChildren={() => "Третий"} />
			</>
		),
		rounded: "width",
	},
} satisfies Story;

export const RoundedHeight: Story = {
	args: {
		renderChildren: () => (
			<>
				<Button renderChildren={() => "Первый"} />
				<Button renderChildren={() => "Второй"} />
				<Button renderChildren={() => "Третий"} />
			</>
		),
		rounded: "height",
	},
} satisfies Story;
