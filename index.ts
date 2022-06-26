import { httpServer } from './src/http_server/index.js';
import { wss } from './src/ws_server/index';

const HTTP_PORT = 3000;

wss.on('connection', ws => {

  ws.on('message', data => {
    console.log(data.toString());
  });

  ws.send('something');
});


console.log(`Start static http server on the ${HTTP_PORT} port!`);

httpServer.listen(HTTP_PORT);


