const express = require('express');
const app = express();
const path = require('path');

// const publicPath = path.join(__dirname, '../public');
app.use(express.static("public"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "./views/index.html"));
});