const yargs=require('yargs');
const chalk =require('chalk');
const notes=require('./note.js');


// Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
      title:{
          describe:'Note title',
          demandOption:true,
          type:'string'
      },
      body:{
          describe:'Note body',
          demandOption: true,
          type:'string'
      }
    },
    handler: function(argv){
        notes.addNotes(argv.title,argv.body)
    }
});

// Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: function(){
        console.log('Removing the note!')
    }
});

// Create list command
yargs.command({
    command:'list',
    describe:'Listing all notes',
    handler: function(){
        console.log('Listing the note!')
    }
});;

// Create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    handler:function(){
        console.log('Reading the note!')
    }
});

console.log(yargs.argv);