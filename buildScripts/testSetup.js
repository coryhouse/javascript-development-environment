// This file isn't transpiled, so must use CommonJS and ES5

// Enable JSDOM to simulate browser environment in Node
var jsdom = require('mocha-jsdom');
jsdom();

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
