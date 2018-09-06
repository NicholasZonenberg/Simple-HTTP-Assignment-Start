const fs = require('fs');

const pic = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getPic = (request, responce) => {
  responce.writeHead(200, { 'Content-Type': 'image/png' });
  responce.write(pic);
  responce.end();
};

module.exports.getPic = getPic;
