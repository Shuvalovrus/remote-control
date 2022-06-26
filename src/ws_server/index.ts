import { WebSocketServer } from 'ws';
import { WS_PORT } from '../../constants.js';

export const wss = new WebSocketServer({ port: WS_PORT });
