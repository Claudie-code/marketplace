const { response } = require('express');
const database = require('../database');

const brandController = {
    
    findAll: async (request, response) => {
        const db = await database;
        const brands = db.collection('brands');
        brands
        .find()
        .toArray()
        .then((err, brands) => {
        if(err) {
            return response.send(err)
        }
        response.status(200).send({brands});
        })
        .catch((error) => {response.send(error)})
    }
}

module.exports = brandController;