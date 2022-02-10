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

    update: async (request, response) => {
        const db = await database;
        const users = db.collection('users');
        users
        .findOneAndUpdate(
            {
                email: request.body.email
            }, 
            {
                $set: {
                    first: request.body.first,
                    last: request.body.last,
                    city: request.body.city,
                    address: request.body.address,
                    country: request.body.country
                }
            }, 
            { returnOriginal: false, returnDocument: "after" }, 
            function (err, result) {
                //Error handling
                if (err) {
                   return response.status(500).send('Something broke!');
                }
        
               //Send response based on the required
                if (result.hasOwnProperty("value") && 
                  result.value !== null) {
                    response.send(result.value);
                } else {
                    response.send("update failed");
                }
           });
    },
    
    findOne: async (request, response) => {
        const db = await database;
        const users = db.collection('users');
        if (!request.body) {
            return response.status(500).send("missing email");
        }
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