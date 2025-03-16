import { NotEmptyString } from "./types";

export const isNotEmptyString = (value: string): value is NotEmptyString =>
	!!value;
