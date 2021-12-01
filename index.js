const express = require('express');
const app = express();//gọi từ express từ node_modules vừa nạp
const port = 3000;

app.get('/tintuc', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});