var css = require('./index.css'); // eslint-disable-line no-unused-vars

var numeral = require('numeral');

const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console