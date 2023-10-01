export const dateFormat = (ymd: string) => {
	const [y, m, d] = ymd.split('-');
	return `${d}/${m}/${y}`;
};
