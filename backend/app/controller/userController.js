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
        users.findByIdAndUpdate(req.session.passport.user, 
            {
               $set : {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }
            },
            (err, user) => {
                 console.log("user", user)
            }
        );
    },
    
    findOne: async (request, response) => {
        const db = await database;
        const users = db.collection('users');
        console.log("testBack", request.body)
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