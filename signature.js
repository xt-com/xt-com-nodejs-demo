const Config = require('./config');
const Crypto = require('crypto');

module.exports = function (paramsObj) {
  const obj = {
    ...paramsObj,
    accesskey: Config.AccessKey,
    nonce: Date.now(),
  };

  const tempAry = [];
  for (let va in obj) tempAry.push(va + '=' + obj[va]);
  tempAry.sort();

  const stringA = tempAry.join('&');
  const hmac = Crypto.createHmac('sha256', Config.SecretKey);
  const signature = hmac.update(stringA).digest('hex');

  obj.signature = signature;

  return obj;
}