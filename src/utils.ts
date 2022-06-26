type commandArray = [string, number]

export const getParams = (params): commandArray => {
	let [command, step] = params.toString().split(' ');

	step = Number(step);

	return [command, step];
}

