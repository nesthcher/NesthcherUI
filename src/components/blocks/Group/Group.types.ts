import { HTMLAttributesWithRef, RenderChildren } from "../../../helpers";

export interface IGroupProps
	extends HTMLAttributesWithRef<HTMLDivElement>,
		RenderChildren {
	rounded: "width" | "height";
}
