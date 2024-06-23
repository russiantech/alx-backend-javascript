const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/cart/:id', (req, res) => {
  res.status(404).send('Not found');
});

const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

server.on('listening', () => {
  console.log('ok, server is running');
});

module.exports = app;
