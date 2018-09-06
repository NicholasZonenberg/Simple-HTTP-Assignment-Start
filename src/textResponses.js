const hello = 'hello world';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

const getTime = (request, responce) => {
  responce.writeHead(200, { 'Content-Type': 'text/html' });
  responce.write(getTimeString());
  responce.end();
};
const getHello = (request, responce) => {
  responce.writeHead(200, { 'Content-Type': 'text/html' });
  responce.write(hello);
  responce.end();
};

module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getTime = getTime;
module.exports.getHello = getHello;
