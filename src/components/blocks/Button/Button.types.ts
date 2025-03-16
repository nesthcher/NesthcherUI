import {
	HTMLAttributesWithRef,
	IAlign,
	IScale,
	IShade,
	RenderChildren,
	RenderFunction,
} from "../../../helpers";

export interface IButtonProps
	extends HTMLAttributesWithRef<HTMLButtonElement>,
		IScale,
		IAlign,
		IShade,
		RenderChildren {
	/** Вставляет компонент перед текстом, обычно значок */
	renderBefore?: RenderFunction;
	/** Вставляет компонент после текста, обычно значок или индикатор */
	renderAfter?: RenderFunction;
	/** Определяет тип скругления кнопки */
	rounded?: boolean;
	/** Если установлено значение true, кнопка отключается, что предотвращает взаимодействие с пользователем */
	disable?: boolean;
	/** Определяет визуальный стиль кнопки, влияя на ее фон и цвет текста */
	mode?: "filled" | "outline" | "ghost";
}
