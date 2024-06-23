// api.test.js
const request = require('request');
const { expect } = require('chai');
const app = require('./api');
const http = require('http');

describe('Index page', () => {
  let server;

  before((done) => {
    server = http.createServer(app).listen(7865, () => {
      done();
    });
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });

  it('correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
