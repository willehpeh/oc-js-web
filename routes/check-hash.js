const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/', function(req, res) {
  if (!req.body.plain || !req.body.hash) {
    res.status(400).send({message: 'You must send an object with a plain string and a hash string!'});
  }
  else {
    bcrypt.compare(req.body.plain, req.body.hash, (error, result) => {
      if (!result) {
        res.status(401).send({message: 'The hash does not match the plain text string!'});
      }
      else {
        res.status(200).send({message: 'Congratulations, here is your gift!', url: 'http://en.bcdn.biz/Images/2018/6/12/27565ee3-ffc0-4a4d-af63-ce8731b65f26.jpg'});
      }
    });
  }
});

module.exports = router;
