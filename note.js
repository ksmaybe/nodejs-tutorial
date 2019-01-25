console.log('opening note.js');

var addNote= function(title,body){
    console.log('Adding note',title,body)
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