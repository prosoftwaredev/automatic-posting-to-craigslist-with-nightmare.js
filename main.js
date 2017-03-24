var Nightmare = require('nightmare'),
  nightmare = Nightmare();
var vo = require('vo');
var ads = require('./ads.js');
var post = require('./post.js');

var main = function * (totalAds) {
  var post = require('./post.js');
  var ads = require('./ads.js');
  for (var i = 0; i < totalAds; i++) {
    console.log('Attempting to post ad', i);
    yield vo(post)(ads[i], i);
    nightmare.end();
  }
  process.exit();
};

vo(main)(ads.length)
