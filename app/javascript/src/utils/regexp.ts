export const splitShift     = (split: string | RegExp) => (s: string) => s.split(split).shift();
export const validatesRegex = (regex: RegExp)          => (s: string) => regex.test(s);
