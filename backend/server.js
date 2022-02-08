const PORT = process.env.PORT || 5000;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = require('./app/router');

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// body-parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const jsonParser = bodyParser.json();

//cors
router.use(cors());

//mongoDB client
// const { MongoClient } = require('mongodb');
// const uri = process.env.DB_URL;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const DATABASE = "marketplace";
app.use('/api', router);
// connect to server
app.listen(PORT, () => {
  console.log('listening on *:5000');
});

//connect to Database
// client.connect((err) => {
//   if(err) {
//     throw err;
//   }

//   !err && console.log('Successfully connected to database');
//   const db = client.db(DATABASE)
//   const products = db.collection("products");
//   const brands = db.collection("brands");
//   const models = db.collection("models");
//   const users = db.collection("users");
//   const orders = db.collection("orders");

//   routes.get('/products', (req, res) => {
//     products
//     .aggregate([
//       {
//         $lookup:{
//           from:"brands",
//           localField:"brandid",
//           foreignField:"id",
//           as:"brand"
//         },
//       },
//       {
//         $lookup:{
//          from:"models",
//          localField:"modelid",
//          foreignField:"id",
//          as:"model"
//         },
//       }
//     ])
//     .toArray()
//     .then((err, products) => {
//     if(err) {
//       return res.send(err)
//     }
//     res.status(200).send({products});
//     })
//     .catch((error) => {res.send(error)})
//   });

//   routes.get('/models', (req, res) => {
//     models
//       .find()
//       .toArray()
//       .then((err, models) => {
//       if(err) {
//         return res.send(err)
//       }
//       res.status(200).send({models});
//       })
//       .catch((error) => {res.send(error)})
//   });

//   routes.get('/brands', (req, res) => {
//     brands
//       .find()
//       .toArray()
//       .then((err, brands) => {
//       if(err) {
//         return res.send(err)
//       }
//       res.status(200).send({brands});
//       })
//       .catch((error) => {res.send(error)})
//   });

//   routes.get('/user', (req, res) => {
//     users
//       .findOne(req.body)
//       .then((err, results) => {
//         if (err) {
//           return res.send(err);
//         }
//         res.status(200).send(results.data);
//       })
//       .catch(error => res.send(error));
//   });

//   routes.post('/products/add', jsonParser, (req, res) => {
//     products
//       .insertOne(req.body)
//       .then(() => res.status(200).send(`succesfully inserted new document`))
//       .catch((error) => {res.send(error)})
//   });

//   routes.post('/users/add', jsonParser, (req, res) => {
//     users
//       .insertOne(req.body)
//       .then(() => res.status(200).send(`succesfully inserted new document`))
//       .catch((error) => {res.send(error)})
//   });

//   routes.post('/orders/add', jsonParser, (req, res) => {
//     orders
//       .insertOne(req.body)
//       .then(() => res.status(200).send(`succesfully inserted new document`))
//       .catch((error) => {res.send(error)})
//   });
// })

//stripe
// const YOUR_DOMAIN = process.env.YOUR_DOMAIN;
// console.log("domain", YOUR_DOMAIN);
// routes.post('/create-checkout-session', jsonParser, async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       line_items: req.body,
//       mode: 'payment',
//       success_url: `${YOUR_DOMAIN}/success`,
//       cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//     });
  
//     res.json({ id: session.id });

//   } catch (error) {
//     res.status(500).send(`failed to process payment ${error}`);
//   }

// });
