const { response } = require('express');
const database = require('../database');

const orderController = {
    
    create: async (request, response) => {
        const db = await database;
        const orders = db.collection('orders');
        orders
        .insertOne(request.body)
        .then(() => response.status(200).send(`succesfully inserted new document`))
        .catch((error) => {response.send(error)})
    }
}

module.exports = orderController;