console.log('opening note.js');

const fs=require('fs');

var fetchNotes=function(){
    try{
        var notesString=fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e){return[];}

};
var saveNote=function(notes){
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
var addNote= function(title,body){
    var notes=fetchNotes();
    var note={title,body};

    var duplicateNotes=notes.filter((note)=>note.title===title);
    if (duplicateNotes.length===0){
    notes.push(note);
    saveNote(notes);
    return note;}
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