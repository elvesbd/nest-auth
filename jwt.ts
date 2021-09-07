const base64Url = require('base64-url');
const crypt = require('crypto')


const header = {
  algoritmo: 'HS256',
  type: 'JWT',
};

const payload = {
  username: 'elves@teste.com',
  name: 'Elves Brito',
  expires: new Date().getTime(),
};

const key = 'abcd123456';

const headerEncoded = base64Url.encode((JSON.stringify(header)));
const payloadEncoded = base64Url.encode((JSON.stringify(payload)));

const signature = crypt
.createHmac('sha256', key)
.update(`${headerEncoded}.${payloadEncoded}`)
.digest('bin');

console.log(`${headerEncoded}.${payloadEncoded}.${base64Url.encode((signature))}`);
