const express = require('express');
// const pool = require('../modules/pool');
const router = express.Router();
const nodemailer = require('nodemailer');

// GET ROUTE
router.get('/', (req, res) => {
    res.sendStatus(200); 
});

// POST ROUTEE
// router.post('/', (req, res) => {
//     console.log('email', req.body);
    
//     let sqlText = `INSERT INTO nodemailer (name, email_address, subject, message)
//                    VALUES ( $1, $2, $3, $4 )`;
//     pool.query(sqlText, [req.body.name, req.body.email_address, req.body.subject, req.body.message]) 
//         .then((result) => { 
//             res.sendStatus(200); 
//         }).catch(error => {
//           console.log('Bad news bears, error in POST', error);
//           res.sendStatus(500)
//         })
// });

// NODEMAILER POST
router.post('/', (req, res) => {
    console.log('email', req.body);
    const data = req.body;
  
    const smtpTransport = nodemailer.createTransport({
        host: 'gmail',
        // port: 587,
        // secure: false,
        auth: {
            user: 'kimberly.a.orchard@gmail.com',
            pass: 'Blake7733'
        }
    });
  
    const mailOptions = {
        from: `${data.email_address}`,
        to: 'kimberly.a.orchard@gmail.com',
        subject: `${data.subject}`,
        html: `<p>${data.message}</p>
                <p>Thank you, ${data.name}</p>`
    };
  
    smtpTransport.sendMail(mailOptions,
        (error, response) => {
            if (error) {
                res.send(error)
            } else {
                res.send('Success')
            }
            smtpTransport.close();
    });
  
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {

});

// PUT ROUTE
router.put('/:id', (req, res) => {

});

module.exports = router;