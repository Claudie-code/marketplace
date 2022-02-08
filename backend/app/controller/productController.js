const { response } = require('express');
const database = require('../database');

const productController = {
    
    findAll: async (request, response) => {
        const db = await database;
        const products = db.collection('products');
        products
        .aggregate([
        {
            $lookup:{
            from:"brands",
            localField:"brandid",
            foreignField:"id",
            as:"brand"
            },
        },
        {
            $lookup:{
            from:"models",
            localField:"modelid",
            foreignField:"id",
            as:"model"
            },
        }
        ])
        .toArray()
        .then((err, products) => {
            if(err) {
            return response.send(err)
            }
            response.status(200).send({products});
        })
        .catch((error) => {response.send(error)})
    }
}

module.exports = productController;