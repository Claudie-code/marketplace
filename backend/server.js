require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
const app = express();
const router = require('./app/router');

// body-parser
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//cors
app.use(cors());

app.use('/api', router);

// connect to server
app.listen(PORT, () => {
  console.log('listening on *:5000');
});
