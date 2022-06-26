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

