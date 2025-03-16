import { CSSProperties } from "react";

/**
 * Мержит стили, пытаясь уменьшить кол-во копирований
 *
 * ## Пример
 *
 * ```ts
 * const style = mergeStyle(arrowStyles, styleProp)
 * ```
 */
export const mergeStyle = (
	a: CSSProperties | undefined,
	b: CSSProperties | undefined
): CSSProperties | undefined => {
	return a && b ? { ...a, ...b } : a || b;
};
