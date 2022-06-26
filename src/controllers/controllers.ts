import robot from 'robotjs';
import * as Utils from "../utils.js";
import * as Drawing from '../models/drawing.js';



export const commandHandler = (data) => {

	type mousePosition = {
		x: number,
		y: number
	}

	const mousePosition : mousePosition = robot.getMousePos();

	const [command, definingParam, length] = Utils.getParams(data);

	switch (command) {
		case "mouse_position":
		  	return (`${command} ${mousePosition.x + 'px'},${mousePosition.y + 'px'}`);
		case "mouse_up":
			robot.moveMouse(mousePosition.x, mousePosition.y - definingParam);
			break;
		case "mouse_right":
			robot.moveMouse(mousePosition.x + definingParam, mousePosition.y);
			break;
		case "mouse_down":
			robot.moveMouse(mousePosition.x, mousePosition.y + definingParam);
			break;
		case "mouse_left":
			robot.moveMouse(mousePosition.x - definingParam, mousePosition.y);
			break;
		case "draw_circle":
			Drawing.drawCircle(mousePosition,definingParam);
			break;
		case "draw_rectangle":
			Drawing.drawRectangle(mousePosition, definingParam, length);
			break;
	}

	return command;

  };


