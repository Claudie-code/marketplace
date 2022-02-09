const { response } = require('express');
const database = require('../database');

const modelController = {
    
    findAll: async (request, response) => {
        const db = await database;
        const models = db.collection('models');
        models
        .find()
        .toArray()
        .then((err, models) => {
        if(err) {
            return response.send(err)
        }
        response.status(200).send({models});
        })
        .catch((error) => {response.send(error)})
    }
}

module.exports = modelController;