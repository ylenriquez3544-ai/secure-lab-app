const express = require('express');

const app = express();

app.get('/api/info', (req, res) => {
  res.status(200).json({
    name: 'Secure Lab App',
    version: '1.1.0',
    environment: 'dev'
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});