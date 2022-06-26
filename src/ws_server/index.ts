import { WebSocketServer } from 'ws';

const WS_PORT = 8181;

export const wss = new WebSocketServer({ port: WS_PORT });
