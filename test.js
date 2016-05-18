'use strict';
const test = require('ava');
const checkWh = require('./cli.js').checkWh;
const checkQuestionMark = require('./cli.js').checkQuestionMark;
const checkingLength = require('./cli.js').checkingLength;

test('detect existant and non-existant question mark', t => {
  const tempWithQ = checkQuestionMark('I will put a question mark at the end?');
  const tempWithoutQ = checkQuestionMark('I will not put a question mark at the end');

  t.true(tempWithQ);
  t.false(tempWithoutQ);
})

test('checking for existant and non-existant wh-question', t => {
  const withWhQuestion = checkWh('how do you turn a string into a number');
  const withoutWhQuestion = checkWh('turning a string into a number');

  t.true( withWhQuestion);
  t.false( withoutWhQuestion);
})

test('checking for the "who" wh-question', t => {
  const withWhQuestion = checkWh('who did this');
  const withoutWhQuestion = checkWh('turning a string into a number');

  t.true( withWhQuestion);
  t.false( withoutWhQuestion);
})
