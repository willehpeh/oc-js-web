const express = require('express');
const router = express.Router();

const titleArray = [
  'The Philosophy Of Cat',
  'How To Make Your Cat Look Amazing In 5 Days',
  'The Ugly Truth About Cats',
  'Want More Money? Start Cats',
  'What You Should Have Asked Your Teachers About Cats',
  'The Ultimate Deal On Cats',
  'Are You Embarrassed By Your Cat Skills? Here\'s What To Do',
  'Using 7 Cat Strategies Like The Pros',
  '3 Things Everyone Knows About Cats That You Don\'t',
  'Cats: This Is What Professionals Do'
];

router.get('/', function(req, res) {
  const randomNumber = Math.floor(Math.random() * 10);
  res.status(200).send({title: titleArray[randomNumber]});
});

module.exports = router;