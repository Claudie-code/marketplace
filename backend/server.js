const PORT = 5000;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = express.Router();
app.use('/api', routes);
require('dotenv').config()
 
// body-parser
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());
const jsonParser = bodyParser.json();

//cors
routes.use(cors());

//mongoDB client
const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster-marketplace.sl3f7.mongodb.net/${process.env.DB_HOST}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const DATABASE = "marketplace";

// connect to server
app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`);
});

//connect to Database
client.connect((err) => {
  if(err) {
    throw err;
  }

  !err && console.log('Successfully connected to database');
  const db = client.db(DATABASE)
  const products = db.collection("products");
  const users = db.collection("users");

  routes.get('/products', (req, res) => {
    products
      .find()
      .toArray()
      .then((err, products) => {
      if(err) {
        return res.send(err)
      }
      res.status(200).send({products});
      })
      .catch((error) => {res.send(error)})
  });

  routes.get('/user', (req, res) => {
    users
      .findOne(req.body)
      .then((err, results) => {
        if (err) {
          return res.send(err);
        }
        res.status(200).send(results.data);
      })
      .catch(error => res.send(error));
  });

  routes.post('/products/add', jsonParser, (req, res) => {
    products
      .insertOne(req.body)
      .then(() => res.status(200).send(`succesfully inserted new document`))
      .catch((error) => {res.send(error)})
  });

  routes.post('/users/add', jsonParser, (req, res) => {
    users
      .insertOne(req.body)
      .then(() => res.status(200).send(`succesfully inserted new user`))
      .catch((error) => {res.send(error)})
  });
})

