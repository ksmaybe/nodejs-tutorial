// var obj ={name:'Andrew'};
// var stringobj=JSON.stringify(obj);
// console.log(typeof stringobj);
// console.log(stringobj);

// var obj ='{"name":"Shang Ke","age":22}';
// var person=JSON.parse(obj);
// console.log(typeof person);
// console.log(person);

const fs =require('fs');

var originalNote={
    title:'Some title',
    body:  25
};
var originalNoteString=JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString=fs.readFileSync('notes.json');
var note=JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);