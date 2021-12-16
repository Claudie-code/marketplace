const PORT = 5000;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = express.Router();
app.use('/api', routes);
 
// body-parser
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());
 
//cors
routes.use(cors());
 
app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`);
});
 
routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.get("/products", (req, res) => {
    res.send("liste de produits");
});