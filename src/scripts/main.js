// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  nebula = require('bespoke-theme-nebula'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  sync = require('bespoke-sync/client');

// Bespoke.js
bespoke.from('article', [
  nebula(),
  keys(),
  touch(),
  function (deck) {
    window.addEventListener('keyup', function (event) {
      event.preventDefault();
      event.stopPropagation(true);

      if ((event.which === 65) || (event.which === 8)) {
        deck.next();
      }
      else if (event.which === 13) {
        deck.prev();
      }
    });
  },
  //bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  sync()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

require('prism/components/prism-java');
require('prism/components/prism-c');
require('prism/components/prism-objectivec');
