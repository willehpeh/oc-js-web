const express = require('express');
const generateUuid = require('generate-uuid');
const router = express.Router();

router.post('/', function(req, res) {

  // checks for required request content
  if (!req.body.title || !req.body.content) {
    res.status(400).send({error: 'Request does not contain valid blog post!'});

  // if all required content present, creates post object with uuid and sends back
  } else {
    const uuid = generateUuid();
    res.status(201).send(
      {
        message: 'Post successfully created.',
        post: {
          id: uuid,
          title: req.body.title,
          content: req.body.content
        }
      }
    );
  }
});

module.exports = router;
