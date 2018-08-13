const express = require('express');
const generateUuid = require('generate-uuid');
const router = express.Router();

router.get('/', function(req, res) {
  const uid = generateUuid();
  res.status(200).send({uid: uid});
});

module.exports = router;