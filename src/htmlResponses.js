const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const getIndex = (request, responce) => {
  responce.writeHead(200, { 'Content-Type': 'text/html' });
  responce.write(index);
  responce.end();
};

const getPage2 = (request, responce) => {
  responce.writeHead(200, { 'Content-Type': 'text/html' });
  responce.write(page2);
  responce.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
