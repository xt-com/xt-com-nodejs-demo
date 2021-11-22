const Request = require('request');
const qs = require('qs');
const Config = require('./config');
const Signature = require('./signature');

module.exports = function (app) {
  app.get('/data/api/v1/getMarketConfig', function (req, res) {
    Request({
      url: Config.URL + '/data/api/v1/getMarketConfig',
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.get('/data/api/v1/getKLine', function (req, res) {
    const body = Signature(req.query);
    Request({
      url: Config.URL + '/data/api/v1/getKLine?' + qs.stringify(body),
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.get('/data/api/v1/getTicker', function (req, res) {
    const body = Signature(req.query);
    Request({
      url: Config.URL + '/data/api/v1/getTicker?' + qs.stringify(body),
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.get('/data/api/v1/getTickers', function (req, res) {
    Request({
      url: Config.URL + '/data/api/v1/getTickers',
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.get('/data/api/v1/getDepth', function (req, res) {
    const body = Signature(req.query);
    Request({
      url: Config.URL + '/data/api/v1/getDepth?' + qs.stringify(body),
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.get('/data/api/v1/getTrades', function (req, res) {
    const body = Signature(req.query);
    Request({
      url: Config.URL + '/data/api/v1/getTrades?' + qs.stringify(body),
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.get('/trade/api/v1/getServerTime', function (req, res) {
    Request({
      url: Config.URL + '/trade/api/v1/getServerTime',
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.get('/trade/api/v1/getBalance', function (req, res) {
    const body = Signature(req.query);
    Request({
      url: Config.URL + '/trade/api/v1/getBalance?' + qs.stringify(body),
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.get('/trade/api/v1/getAccounts', function (req, res) {
    Request({
      url: Config.URL + '/trade/api/v1/getAccounts',
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.get('/trade/api/v1/getFunds', function (req, res) {
    const body = Signature(req.query);
    Request({
      url: Config.URL + '/trade/api/v1/getFunds?' + qs.stringify(body),
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.post('/trade/api/v1/order', function (req, res) {
    const body = Signature(req.body);
    console.log(body);
    Request({
      url: Config.URL + '/trade/api/v1/order',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: body,
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.post('/trade/api/v1/batchOrder', function (req, res) {
    const {market} = req.query;
    const dataStr = JSON.stringify(req.body);
    const data = Buffer.from(dataStr).toString('base64');
    const body = Signature({market, data});
    console.log(body);
    Request({
      url: Config.URL + '/trade/api/v1/batchOrder',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: body,
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.post('/trade/api/v1/cancel', function (req, res) {
    const body = Signature(req.body);
    console.log(body);
    Request({
      url: Config.URL + '/trade/api/v1/cancel',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: body,
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.post('/trade/api/v1/batchCancel', function (req, res) {
    const {market} = req.query;
    const dataStr = JSON.stringify(req.body);
    const data = Buffer.from(dataStr).toString('base64');
    const body = Signature({market, data});
    console.log(body);
    Request({
      url: Config.URL + '/trade/api/v1/batchCancel',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: body,
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.get('/trade/api/v1/getOrder', function (req, res) {
    const body = Signature(req.query);
    Request({
      url: Config.URL + '/trade/api/v1/getOrder?' + qs.stringify(body),
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.get('/trade/api/v1/getOpenOrders', function (req, res) {
    const body = Signature(req.query);
    Request({
      url: Config.URL + '/trade/api/v1/getOpenOrders?' + qs.stringify(body),
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.post('/trade/api/v1/getBatchOrders', function (req, res) {
    const {market} = req.query;
    const dataStr = JSON.stringify(req.body);
    const data = Buffer.from(dataStr).toString('base64');
    const body = Signature({market, data});
    console.log(body);
    Request({
      url: Config.URL + '/trade/api/v1/getBatchOrders?' + qs.stringify(body),
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });

  app.get('/trade/api/v1/myTrades', function (req, res) {
    const body = Signature(req.query);
    Request({
      url: Config.URL + '/trade/api/v1/myTrades?' + qs.stringify(body),
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
    }, function (err, httpResponse, body) {
      console.log(body);
      res.send(body);
    })
  });
}