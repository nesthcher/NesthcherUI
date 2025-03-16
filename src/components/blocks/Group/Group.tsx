import { FC, ReactNode } from "react";

import { classNames } from "../../../helpers";

import { IGroupProps } from "./Group.types";

import styles from "./Group.module.css";

const stylesRounded = {
	width: styles["rounded-width"],
	height: styles["rounded-height"],
};

export const Group: FC<IGroupProps> = ({
	renderChildren,
	rounded = "width",
	...restProps
}): ReactNode => {
	return (
		<div
			{...restProps}
			className={classNames(styles.rounded, stylesRounded[rounded])}
		>
			{renderChildren()}
		</div>
	);
};
