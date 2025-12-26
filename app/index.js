const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello dari Docker Production! Saya telah menjalankan Docker</h1>');
});

app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});