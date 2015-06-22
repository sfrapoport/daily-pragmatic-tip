#! /usr/bin/env node
var fs = require('fs');
var args = process.argv.slice(2);

if (args.length > 0) {
    var tipNumber = args[0];
} else {
    tipNumber = Math.floor(Math.random() * 70);
}

var tips = fs.readFileSync('./pragmaticprogrammer.txt');

var tipList = tips.toString().split('\n');
console.log('Tip #' + tipNumber + ' from The Pragmatic Programmer');
console.log(tipList[tipNumber]);

