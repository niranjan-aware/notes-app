const yargs=require('yargs')
const anotes=require('./anote')
const rnotes=require('./rnote')
const renotes=require('./renote')
const lnotes=require('./lnote')
yargs.commands({
    command: 'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body Of Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        //console.log(argv.title,argv.body)
        anotes.addNote(argv.title,argv.body)
    }
})
yargs.commands({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        rnotes.removeNote(argv.title)
    }
})
yargs.commands({
    command:'read',
    describe:'reading note',
    builder:{
        title:{
        describe:'Note title',
        demandOption:true,
        type:'string'
        }
    },
    handler:(argv)=>{
        renotes.readNote(argv.title)
    }
})
yargs.commands({
    command:'list',
    describe:'Notes list',
    handler:()=>{
        lnotes.listNote()
    }
})

yargs.parse()