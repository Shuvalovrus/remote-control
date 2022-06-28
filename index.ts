import { httpServer } from './src/http_server/index.js';
import { wss } from './src/ws_server/index.js';
import { HTTP_PORT } from './constants.js';
import { commandHandler } from './src/controllers/controllers.js'


wss.on('connection', ws => {

  ws.on('message', data => {
  	
	ws.send(commandHandler(data))
 });

});


console.log(`Start static http server on the ${HTTP_PORT} port!`);

httpServer.listen(HTTP_PORT);


