const request = require('request');
const { expect } = require('chai');
const serverModulePath = require.resolve('./api');
let server;

describe('API integration test', function() {
  const API_URL = 'http://localhost:7865';

  before(function(done) {
    // Clear the module cache and start the server
    delete require.cache[serverModulePath];
    server = require(serverModulePath);
    setTimeout(done, 500); // Adding a small delay to ensure the server starts
  });

  after(function(done) {
    // Close the server after tests
    if (server && server.listening) {
      server.close(done);
    } else {
      done();
    }
  });

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
