import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../../components/blocks";
import { hideControls } from "../../../storybook/controls";

const meta = {
	title: "Компоненты/Блоки/Button",
	component: Button,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Отображает кнопку или элемент, похожий на кнопку, с настраиваемыми свойствами, такими как размер, режим и состояние загрузки. Поддерживает добавление значков или других элементов до и после текста.",
			},
		},
	},

	argTypes: {
		...hideControls("renderChildren", "ref", "renderBefore", "renderAfter"),
		// ...setControlsTypes(["scale"], "text"),
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		renderChildren: () => "Кнопка",
		scale: "m",
		align: "center",
		shade: "accent",
		mode: "filled",
	},
} satisfies Story;

export const WithBefore: Story = {
	args: {
		renderChildren: () => "Кнопка",
		renderBefore: () => "Перед",
		scale: "m",
		align: "center",
		shade: "accent",
		mode: "filled",
	},
} satisfies Story;

export const WithAfter: Story = {
	args: {
		renderChildren: () => "Кнопка",
		renderAfter: () => "После",
		scale: "m",
		align: "center",
		shade: "accent",
		mode: "filled",
	},
} satisfies Story;
