#! /usr/bin/env node
var fs = require('fs');
var path = require('path');
var args = process.argv.slice(2);

var tips = fs.readFileSync(path.join(__dirname, 'pragmaticprogrammer.txt'));
var tipList = tips.toString().split('\n');

try {
    if (args.length > 0) {
    var tipNumber = args[0];
    if (0 >= tipNumber || tipNumber > 70) {
        throw new Error('There are only 70 tips, please input an integer between 1 and 70');
    }
    } else {
        tipNumber = Math.floor(Math.random() * 70) + 1;
    }
    console.log('Tip #' + tipNumber + ' from The Pragmatic Programmer');
    console.log(tipList[tipNumber - 1]);
} catch (err) {
    console.error(err.message);
}


