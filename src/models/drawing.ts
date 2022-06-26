import robot from 'robotjs';

type mousePosition = {
		x: number,
		y: number
}

export const drawCircle = (mousePosition :mousePosition, radius:number) : void => {

	robot.mouseToggle("down");

		for (let i = 0; i <= Math.PI * 2; i += 0.02) {

		    const x = mousePosition.x + radius - (radius * Math.cos(i));
		    const y = mousePosition.y + (radius * Math.sin(i));
		    robot.dragMouse(x, y);

	  	};
  	robot.mouseToggle("up");
}


export const drawRectangle = (mousePosition :mousePosition, width :number, lenght :number) : void => {

	let { x, y } = mousePosition;

	robot.mouseToggle("down");

	robot.setMouseDelay(95);

	robot.moveMouse(x += width, y);
	robot.moveMouse(x, y -= lenght);
	robot.moveMouse(x -= width, y);
	robot.moveMouse(x, y += lenght);

	robot.setMouseDelay(10);

	robot.mouseToggle("up");

}

export const drawSquare = (mousePosition :mousePosition, side :number) : void => {

	let { x, y } = mousePosition;

	robot.mouseToggle("down");

	robot.setMouseDelay(95);

	robot.moveMouse(x += side, y);
	robot.moveMouse(x, y -= side);
	robot.moveMouse(x -= side, y);
	robot.moveMouse(x, y += side);

	robot.setMouseDelay(10);

	robot.mouseToggle("up");
}