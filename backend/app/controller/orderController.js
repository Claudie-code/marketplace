const { response } = require('express');
const Email = require('email-templates');
const database = require('../database');
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const path = require('path');
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const orderController = {
    
    create: async (request, response) => {
        const db = await database;
        const orders = db.collection('orders');
        orders
        .insertOne(request.body)
        .then(async (responseOrder) => {
            try {
                const accessToken = await oAuth2Client.getAccessToken();

                const transporter = nodemailer.createTransport({
                    service: "gmail", 
                    auth: {
                        type: 'OAuth2',
                        user: "roby.marketplace@gmail.com",
                        clientId: CLIENT_ID,
                        clientSecret: CLIENT_SECRET,
                        refreshToken: REFRESH_TOKEN,
                        accessToken: accessToken
                    }
                 });

                const templateDir = path.join(__dirname, "../", 'templates', 'index')
                const templateDirCss = path.join(__dirname, "../", 'templates')
            
                const email = new Email()
                
                const locals = request.body;

                const temp = await email.render({
                    path: templateDir,
                    juiceResources: {
                      preserveImportant: true,
                      webResources: {
                        // view folder path, it will get css from `mars/style.css`
                        relativeTo: templateDirCss
                      }
                    }
                  }, {...locals, noOrder: responseOrder.insertedId});
                
                const result = await transporter.sendMail({
                    from: 'Roby <roby.marketplace@gmail.com>', // sender address
                    to: request.body.user.email, // list of receivers
                    subject: "Thank you for your order", // Subject line
                    text: "test", // plain text body
                    html: temp,
                }); 
                
                response.status(200).send({
                    message: "email sent",
                    result
                });
            } catch (error) {
                console.log("err", error);
            }

        })
        .catch((error) => {response.send(error)})
    }
}

module.exports = orderController;