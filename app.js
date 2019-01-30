console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./note.js');

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
//
// var filteredArray=_.uniq(['Mike']);
// console.log(filteredArray);
// var user=os.userInfo();
// console.log(user);
// fs.appendFileSync('greetings.txt',`sup bitches ${user.username} You are ${notes.age} !\n`);
// console.log('Results: ',notes.add(9,-2));
const argv=yargs.argv;
var command =argv._[0];
console.log('Command: ',command);
console.log('Process: ',process.argv);
console.log('Yargs: ',argv);

if (command==='add'){
    console.log('Adding new note');
    var note=notes.addNote(argv.title,argv.body);
    if (note){console.log('Note created');}
    else{console.log('Note title taken');}
}
else if (command==='list'){
    console.log('Listing all notes');
    notes.getAll();
}
else if (command==='read'){
    console.log('Reading note');
    notes.getNote(argv.title);
}
else if (command==='remove'){
    console.log('Removing note');
    notes.removeNote(argv.title);
}
else{console.log('Command not recognized');}
