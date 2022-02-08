require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.DB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const DATABASE = "marketplace";

module.exports = client.connect().then(mongoClient => mongoClient.db(DATABASE));