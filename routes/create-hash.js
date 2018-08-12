const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/', function(req, res) {
  if (!req.body.secret) {
    res.status(400).send({message: 'You must send a string!'});
  }
  else {
    bcrypt.hash(req.body.secret, 10, (error, hash) => {
      const responseObject = {
        hash: hash
      };
      res.status(200).send(responseObject);
    });
  }
});

module.exports = router;
