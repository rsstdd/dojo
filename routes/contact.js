'use strict';
const express = require('express');
const boom = require('boom');
const nodemailer = require('nodemailer');

const ev = require('express-validation');
const validations = require('../validations/airplanes');

router.post('/', (req, res, _next) => {
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
