import { ReactNode } from "react";

export const hasReactNode = (value: ReactNode): boolean => {
	return (
		value !== undefined && value !== null && value !== false && value !== ""
	);
};

export const isPrimitiveReactNode = (node: ReactNode): boolean => {
	return typeof node === "string" || typeof node === "number";
};
