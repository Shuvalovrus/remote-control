import { httpServer } from './src/http_server/index.js';
import { wss } from './src/ws_server/index.js';
import * as Utils from "./src/utils.js";
import robot from 'robotjs';
import { HTTP_PORT } from './constants.js';

type mousePosition = {
	x: number,
	y: number
}

wss.on('connection', ws => {

  ws.on('message', data => {

  	const mousePosition : mousePosition = robot.getMousePos();

   	const [command, step] = Utils.getParams(data);

	switch (command) {
		case "mouse_position":
		  	ws.send(`${command} ${mousePosition.x + 'px'},${mousePosition.y + 'px'}`);
			break;
		case "mouse_up":
			robot.moveMouse(mousePosition.x, mousePosition.y - step);
		  	ws.send(command);
			break;
		case "mouse_right":
			robot.moveMouse(mousePosition.x + step, mousePosition.y);
		  	ws.send(command);
			break;
		case "mouse_down":
			robot.moveMouse(mousePosition.x, mousePosition.y + step);
		  	ws.send(command);
			break;
		case "mouse_left":
			robot.moveMouse(mousePosition.x - step, mousePosition.y);
		  	ws.send(command);
			break;
	}

  });

});


console.log(`Start static http server on the ${HTTP_PORT} port!`);

httpServer.listen(HTTP_PORT);


