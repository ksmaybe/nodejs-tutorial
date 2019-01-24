
console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./note.js');

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

var filteredArray=_.uniq(['Andrew',1,'Andrew',1,2,3,4]);
console.log(filteredArray);
// var user=os.userInfo();
// console.log(user);
// fs.appendFileSync('greetings.txt',`sup bitches ${user.username} You are ${notes.age} !\n`);
// console.log('Results: ',notes.add(9,-2));