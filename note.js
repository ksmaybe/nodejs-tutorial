const fs=require('fs');
console.log('Writing notes');

const getNotes=function(){
    return 'Your notes'
};

function addNotes(title,body){
    const notes=loadNotes();
    console.log(title,body);
    notes.push({
        title: title,
        body: body
    });
    console.log(notes);
    saveNotes(notes);
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