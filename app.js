const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('sending hello world');
  res.send('Hello world');
});

app.listen(5000, () => console.log('server listening on port 5000'));
