interface IClassNamesDictionary {
	[index: string]: boolean | undefined | null;
}

type ClassName =
	| string
	| number
	| IClassNamesDictionary
	| boolean
	| undefined
	| null;

export const classNames = (...args: ClassName[]): string => {
	const result: string[] = [];

	args.forEach((item): void => {
		if (!item) return;

		switch (typeof item) {
			case "string":
				result.push(item);
				break;

			case "object":
				Object.keys(item).forEach((key: string) => {
					if (item[key]) {
						result.push(key);
					}
				});
				break;

			default:
				result.push(`${item}`);
		}
	});

	return result.join(" ");
};
