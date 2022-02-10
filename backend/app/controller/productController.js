const database = require('../database');

const productController = {
    create: async (request, response) => {
        const db = await database;
        const products = db.collection('products');
        products
        .insertOne(request.body)
        .then(() => response.status(200).send(`succesfully inserted new document`))
        .catch((error) => {response.send("erreur",error)})
    },
    
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