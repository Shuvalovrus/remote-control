type commandArray = [string, number, number]

export const getParams = (params): commandArray => {
	console.log(params.toString());
	let [command, definingParam, height] = params.toString().split(' ');

	definingParam = Number(definingParam);
	height = Number(height) || 0;

	return [command, definingParam, height];
}

