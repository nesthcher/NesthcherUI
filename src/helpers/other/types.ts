import {
	AnchorHTMLAttributes,
	AriaAttributes,
	HTMLAttributes,
	ReactNode,
	Ref,
} from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Brand<_TType, TBrand extends symbol> = TBrand & {
	[key in TBrand]: never;
};
export type BrandedNumber<TBrand extends symbol> = Brand<number, TBrand>;

export declare const kilometersBrand: unique symbol;
export type Kilometers = BrandedNumber<typeof kilometersBrand>;

export type FromSnakeToCamelCase<
	SnakeCaseString extends string,
	ProcessedPart extends string = ""
> = SnakeCaseString extends `${infer Word}_${infer Rest}`
	? FromSnakeToCamelCase<Capitalize<Rest>, `${ProcessedPart}${Word}`>
	: `${ProcessedPart}${SnakeCaseString}`;

export type Prettify<T> = T extends object
	? { [Key in keyof T]: Prettify<T[Key]> }
	: T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NotEmptyString = `${any}${string}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any[]) => any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RenderFunction = (...args: any[]) => ReactNode;

export type RenderChildren = {
	/** Используется вместо children для динамического рендеринга контента внутри компонента */
	renderChildren: RenderFunction;
};

export interface IAlign {
	/** Определяет центрование компонента, влияя на расположение дочерних элементов */
	align?: "left" | "center" | "right";
}

export interface IShade {
	/** Определяет визуальный стиль компонента, влияя на ее фон и цвет текста */
	shade?: "accent" | "positive" | "negative";
}

export interface IScale {
	/** Управляет размером компонента, влияя на отступы и размер шрифта */
	scale?: "xs" | "s" | "m" | "l" | "xl";
}

export type DataAttribute = Record<
	`data-${string}`,
	string | number | boolean | undefined | null
>;

export interface IRef<T> {
	/** Сссылка предоставляющая способ доступа к DOM-узлам или React-элементам */
	ref?: Ref<T>;
}

/**
 * @see {@link https://semver.org/lang/ru/}
 */
export interface IVersion {
	/** МАЖОРНАЯ версия, когда сделаны обратно несовместимые изменения API */
	major: number;
	/** МИНОРНАЯ версия, когда вы добавляете новую функциональность, не нарушая обратной совместимости */
	minor?: number;
	/** ПАТЧ-версия, когда вы делаете обратно совместимые исправления */
	patch?: number;
}

/**
 * Тип содержит атрибуты, которые применяются только для `<a>`
 *
 * @see {@link https://developer.mozilla.org/ru/docs/Web/HTML/Element/A &lt;a&gt; - HTML | MDN}
 */
export type AnchorHTMLAttributesOnly = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	keyof HTMLAttributes<HTMLAnchorElement>
> &
	AriaAttributes;

/**
 * Проверяет, является ли тип подтипом другого.
 *
 * В TS не реализовано.
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/12936}
 */
export type Exact<A, B> = A extends B ? B : never;

/**
 * Для возможности указывать css custom properties
 */
export type CSSCustomProperties<
	T extends string | number | undefined = string
> = Record<`--${string}`, T>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Nothing {}

/**
 * Автозаполнение для типов
 *
 * @example
 * LiteralUnion<'foo' | 'bar', string>
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/29729}
 */
export type LiteralUnion<Union, Type> = Union | (Type & Nothing);

export type HTMLAttributesWithRef<T> = Omit<HTMLAttributes<T>, "children"> &
	IRef<T>;

export type ValuesOfObject<T> = T[keyof T];

export type GetPropsWithFunctionKeys<T> = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

export type PickOnlyFunctionProps<T> = Pick<T, GetPropsWithFunctionKeys<T>>;

/**
 * Даёт возможность поймать ошибку, если в компонент передаются лишние свойства.
 *
 * @example
 * // пример использования
 * const nativeProps: HasOnlyExpectedProps<typeof restProps, NativeSelectProps> = restProps;
 *
 * @example
 * // расширенный пример
 * type SelectProps {
 *   mode: string,
 *   multiline: boolean;
 *   selectType?: SelectType;
 * }
 *
 * type NativeSelectProps {
 *   selectType?: SelectType;
 * }
 *
 * const selectProps: SelectProps = {
 *   mode: "card",
 *   multiline: true,
 *   selectType: "default",
 * }
 *
 * // будет ошибка, так как multiline в NativeSelectProps нет
 * const {mode, ...restProps} = selectProps;
 * const nativeProps: HasOnlyExpectedProps<typeof restProps, NativeSelectProps> = restProps;
 *
 * // а вот так ошибки не будет, так как restProps больше не содержит multiline
 * const {mode, multiline, ...restProps} = selectProps;
 * const nativeProps: HasOnlyExpectedProps<typeof restProps, NativeSelectProps> = restProps;
 */
export type HasOnlyExpectedProps<Props, ExpectedProps> = {
	[K in keyof Props]: K extends keyof ExpectedProps
		? ExpectedProps[K]
		: never;
};

export type TimeoutId = ReturnType<typeof setTimeout> | null;
