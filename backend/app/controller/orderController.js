const { response } = require('express');
const database = require('../database');
const nodemailer = require("nodemailer");

const orderController = {
    
    create: async (request, response) => {
        const db = await database;
        const orders = db.collection('orders');
        orders
        .insertOne(request.body)
        .then(async () => {
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                service: "Yahoo",  // sets automatically host, port and connection security settings
                auth: {
                    user: "xxxxxxxxxx95@yahoo.com",
                    pass: "xxxxxxxxxxxx"
                }
             });
            let info = await transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: "gueguen_c@yahoo.fr, gueguen_c@yahoo.fr", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            response.status(200).send(`succesfully inserted new document`);
        })
        .catch((error) => {response.send(error)})
    }
}

module.exports = orderController;