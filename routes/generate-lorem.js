const express = require('express');
const router = express.Router();

const loremArray = [
  'Pet my belly, you know you want to; seize the hand and shred it! find something else more interesting. Purrrrrr play riveting piece on synthesizer keyboard but meow meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat lick the plastic bag so swat turds around the house.',
  'Being gorgeous with belly side up lick butt and make a weird face but eat a plant, kill a hand toy mouse squeak roll over stick butt in face pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now.',
  'Fall over dead (not really but gets sypathy) leave hair everywhere under the bed with tail in the air refuse to drink water except out of someone\'s glass yet roll over and sun my belly behind the couch. Allways wanting food love to play with owner\'s hair tie, yet man running from cops stops to pet cats.',
  'Chirp at birds a nice warm laptop for me to sit on. I like big cats and i can not lie meow in empty rooms but make plans to dominate world and then take a nap but dead stare with ears cocked yet chew iPad power cord. Kitty kitty. Nya nya nyan lick left leg for ninety minutes, still dirty you call this cat food but kitty power.',
  'Going to catch the red dot today going to catch the red dot today jump off balcony, onto stranger\'s head chirp at birds always ensure to lay down in such a manner that tail can lightly brush human\'s nose so sit and stare cat cat moo moo lick ears lick paws but you are a captive audience while sitting on the toilet, pet me.',
  'Sit on the laptop thinking longingly about tuna brine, yet mewl for food at 4am ask to go outside and ask to come inside and ask to go outside and ask to come inside. Catasstrophe if human is on laptop sit on the keyboard. Demand to be let outside at once, and expect owner to wait for me as i think about it.',
  'Please stop looking at your phone and pet me sit on the laptop but stare at ceiling light my left donut is missing, as is my right or refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. I am the best. When in doubt, wash headbutt owner\'s knee, that box?',
  'Suddenly go on wild-eyed crazy rampage. Leave dead animals as gifts meow loudly just to annoy owners and mew. Really likes hummus pretend you want to go out but then don\'t yet where is my slave? I\'m getting hungry purr while eating sleep nap. Carefully drink from water glass and then spill it everywhere and proceed to lick the puddle loved it, hated it, loved it, hated it.',
  'That box? i can fit in that box meeeeouw. Stare at guinea pigs poop in the plant pot yet stare out the window chase imaginary bugs, and flop over scratch leg; meow for can opener to feed me yet shake treat bag. I just saw other cats inside the house and nobody ask me before using my litter box please stop looking at your phone and pet me.',
  'My slave human didn\'t give me any food so i pooped on the floor reward the chosen human with a slow blink yet groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked yet scream at teh bath need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me.'
];

router.get('/', function(req, res) {
  const randomNumber = Math.floor(Math.random() * 10);
  res.status(200).send({lorem: loremArray[randomNumber]});
});

module.exports = router;