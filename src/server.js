const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const picHandler = require('./imageResponses');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, responce) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, responce);
      break;
    case '/page2':
      htmlHandler.getPage2(request, responce);
      break;
    case '/hello':
      textHandler.getHello(request, responce);
      break;
    case '/time':
      textHandler.getTime(request, responce);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, responce);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, responce);
      break;
    case '/dankmemes':
        picHandler.getPic(request, responce);
        break;
    default:
      htmlHandler.getIndex(request, responce);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`listenening on 127.0.0.1: ${port}`);
