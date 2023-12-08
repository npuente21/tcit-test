const express = require('express');
const cors = require('cors');
const app = express();

//Middlewares
app.use(express.json());
app.use(cors())

app.use(require('./routes/index.js'));



app.listen(8080);
console.log("Server running on port 8080");