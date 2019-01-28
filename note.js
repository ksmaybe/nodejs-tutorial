console.log('opening note.js');

const fs=require('fs');
var addNote= function(title,body){
    var notes=[];
    var note={title,body};
    try{
    var notesString=fs.readFileSync('notes-data.json');
    notes=JSON.parse(notesString);}
    catch(e){}
    var duplicateNotes=notes.filter((note)=>note.tile===title);
    if (duplicateNotes.lengt===0){notes.push}
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))
};
var getAll=function(){
    console.log('Getting all notes');
};
var getNote=function(title){
    console.log('Getting note',title);
};
var removeNote=function(title){
  console.log('Removing note',title)
};
module.exports={addNote,getAll,getNote,removeNote};