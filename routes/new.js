var express = require('express');
var router = express.Router();

let messages = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form');
});

// POST for a new message
router.post('/', function(res,req) {
  const author = req.body.authorName;
  const message = req.body.messageText;
  message.push({ text: message, user: author, added:new Date() });
  res.redirect('/');
})

module.exports = router;
