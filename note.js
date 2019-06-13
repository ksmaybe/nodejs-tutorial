const fs=require('fs');
console.log('Writing notes');

const getNotes=function(){
    return 'Your notes'
};

function addNotes(title,body){
    const notes=loadNotes();
    const duplicateNotes = notes.filter(function(note){
      return note.title=title;
    });
    if (duplicateNotes.length===0){notes.push({
        title: title,
        body: body
    });
    console.log(notes);
    saveNotes(notes);
    }else{
        console.log('Note title taken!')
    }

}

const saveNotes = function(notes){
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
};

const loadNotes= function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json');
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }

};
module.exports={
    getNotes: getNotes,
    addNotes: addNotes
};