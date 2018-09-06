const text = require('./textResponses.js');

const getHelloJSON = (request, responce) => {
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);

  responce.writeHead(200, { 'Content-Type': 'application/json' });
  responce.write(stringMessage);
  responce.end();
};

const getTimeJSON = (request, responce) => {
  const timeJSON = {
    message: text.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJSON);

  responce.writeHead(200, { 'Content-Type': 'application/json' });
  responce.write(stringMessage);
  responce.end();
};

module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
