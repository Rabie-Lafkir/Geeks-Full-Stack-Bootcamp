const _ = require('lodash');
const { add, multiply } = require('./math');

const nums = [3, 7, 10];
console.log('Sum:', _.sum(nums));
console.log('Add:', add(4, 6));
console.log('Multiply:', multiply(5, 8));
