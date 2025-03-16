import { FC, ReactElement } from "react";

import { classNames } from "../../../helpers";

import { IButtonProps } from "./Button.types";

import styles from "./Button.module.css";

const scaleStyles = {
	xs: styles["button-scale-xs"],
	s: styles["button-scale-s"],
	m: styles["button-scale-m"],
	l: styles["button-scale-l"],
	xl: styles["button-scale-xl"],
};

const modeStyles = {
	filled: styles["button-mode-filled"],
	outline: styles["button-mode-outline"],
	ghost: styles["button-mode-ghost"],
};

const alignStyles = {
	left: styles["button__children-align-left"],
	center: styles["button__children-align-center"],
	right: styles["button__children-align-right"],
};

const shadeStyles = {
	accent: styles["button-shade-accent"],
	positive: styles["button-shade-positive"],
	negative: styles["button-shade-negative"],
};

export const Button: FC<IButtonProps> = ({
	renderChildren,
	renderBefore,
	renderAfter,
	disable = false,
	rounded = true,
	mode = "filled",
	scale = "m",
	align = "center",
	shade = "accent",
	className,
	...restProps
}): ReactElement => {
	return (
		<button
			{...restProps}
			disabled={disable}
			className={classNames(
				styles.button,
				scaleStyles[scale],
				rounded && styles["button-rounded"],
				disable && styles["button-disable"],
				modeStyles[mode],
				shadeStyles[shade],
				className
			)}
		>
			{renderBefore && (
				<div className={styles.button__before}>{renderBefore?.()}</div>
			)}
			<div
				className={classNames(
					styles.button__children,
					alignStyles[align]
				)}
			>
				{renderChildren()}
			</div>
			{renderAfter && (
				<div className={styles.button__after}>{renderAfter?.()}</div>
			)}
		</button>
	);
};
