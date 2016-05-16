'use strict';
const test = require('ava');
let checkWh = require('./cli.js').checkWh;
let checkQuestionMark = require('./cli.js').checkQuestionMark;

test('detect existant and non-existant question mark', t => {
  const tempWithQ = checkQuestionMark('sdfsdf?');
  const tempWithoutQ = checkQuestionMark('sdfsdf');

  t.true(tempWithQ);
  t.false(tempWithoutQ);
})

test('checking for existant and non-existant wh-question', t => {
  const withWhQuestion = checkWh('how do you turn a string into a number');
  const withoutWhQuestion = checkWh('turning a string into a number');

  t.true( withWhQuestion);
  t.false( withoutWhQuestion);
})
