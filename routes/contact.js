'use strict';
const express = require('express');
const boom = require('boom');
const nodemailer = require('nodemailer');

const ev = require('express-validation');
const validations = require('../validations/airplanes');

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');


router.post('/contact', (req, res, _next) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'rssmtdd@gmail.com',
      pass: 'DinoisaDinosaur1!'
    }
  });
})


const router = express.Router();

module.exports = router;

// create reusable transporter object using the default SMTP transport

// // setup e-mail data with unicode symbols
// var mailOptions = {
//     from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
//     to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world 🐴', // plaintext body
//     html: '<b>Hello world 🐴</b>' // html body
// };
//
// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });
