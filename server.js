const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta "assets"
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'portafolio.html'));
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
