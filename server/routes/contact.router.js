const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// GET ROUTE
router.get('/', (req, res) => {
    res.sendStatus(200); 
});

// NODEMAILER && POST ROUTE
router.post('/', (req, res) => {
    console.log('email', req.body);
    const data = req.body;
    const password = process.env.password;
  
    const smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'kimberly.a.orchard@gmail.com',
            pass: password
        },
        tls: {
            rejectUnauthorized: false 
        }
    });

    smtpTransport.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages!");
        }
      });
  
    const mailOptions = {
        from: `${data.email_address}`,
        to: 'jfredericksen12@gmail.com',
        subject: `${data.subject}`,
        html: `<p>${data.message}</p>
                <p>Thank you, ${data.name}</p>`
    };

    smtpTransport.sendMail(mailOptions,
        (error, response) => {
            if (error) {
                console.log('error sending', error);
            } else {
                console.log('Success!');
            }
            smtpTransport.close();
    });

    // Sends the message to the database
    let sqlText = `INSERT INTO nodemailer (name, email_address, subject, message)
                   VALUES ( $1, $2, $3, $4 )`;
    pool.query(sqlText, [data.name, data.email_address, data.subject, data.message]) 
        .then((result) => { 
            res.sendStatus(200); 
        }).catch(error => {
          console.log('Bad news bears, error in POST', error);
          res.sendStatus(500)
        })
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {

});

// PUT ROUTE
router.put('/:id', (req, res) => {

});

module.exports = router;