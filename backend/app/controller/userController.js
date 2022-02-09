const { response } = require('express');
const database = require('../database');

const userController = {
    create: async (request, response) => {
        const db = await database;
        const users = db.collection('users');
        users
        .insertOne(request.body)
        .then(() => response.status(200).send(`succesfully inserted new document`))
        .catch((error) => {response.send(error)})
    },
    
    findOne: async (request, response) => {
        const db = await database;
        const users = db.collection('users');
        users
        .findOne(request.body)
        .then((err, results) => {
            if (err) {
            return response.send(err);
            }
            response.status(200).send(results.data);
        })
        .catch(error => response.send(error));
    }
}

module.exports = userController;