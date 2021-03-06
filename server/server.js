const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const contactRouter = require('./routes/contact.router.js');
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/contact', contactRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
