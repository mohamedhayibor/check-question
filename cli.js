#!/usr/bin/env node
'use strict'
const meow = require('meow');

const cli = meow(`
  Usage:
    check-question <question no double quotes needed>
    -v/--version    Print version
    -h/--help       Print help
  `, {
    alias: {
      v: 'version',
      h: 'help'
    },
    string: ['_']
});

const question = cli.input.join(' ');

let everythingIsOk = true;

/** 3 things to check:
* - question's length, wh-question and question mark.
*/

// checking length, (will add test later)
if (question.length < 1) {
  console.error('A question is required');
  process.exit(1);
} else if (question.length > 150) {
  process.stdout.write('Your question might be too long.\nCould you make it more concise?\n\n');
  everythingIsOk = false;
} else if (question.length < 15) {
  process.stdout.write('Your question might be too short.\nCould you give more context?\n\n');
  everythingIsOk = false;
}

// check for the wh questions
const checkWh = (value) => {
  let tempArray = value.toLowerCase().split(' ');
  return tempArray.filter( val => {
    return (val === 'how' || val === 'why' || val === 'what' ||
    val === 'where' || val === 'when');
  }).length > 0;
};

if ( !checkWh(question) ) {
  process.stdout.write(`Your question does not contain a:
    - what
    - where
    - how
    - when
    - or why keyword.\n\n`);
  everythingIsOk = false;
}

// checking for question mark
const checkQuestionMark = (value) => {
  let tempString = value.trim();
  return (tempString[tempString.length - 1] === "?");
};

if ( !checkQuestionMark(question) ) {
  process.stdout.write('Your question does not have a question mark.\nAdding it would make it awesome.\n\n');
  everythingIsOk = false;
}

// export for testing purposes
module.exports = { checkWh, checkQuestionMark };

// exit process after 2s
setTimeout(function() {
  if (everythingIsOk) {
    process.stdout.write('That looks awesome!');
  }
  process.exit(1)
}, 2 * 1000)
