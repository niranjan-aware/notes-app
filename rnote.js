const fs=require('fs')
const removeNote=(title)=>{
    const notes=loadnotes()
    const duplicatenotes = notes.filter((note)=>{
        return note.title !== title
    })
    if(notes.length>duplicatenotes.length){
    saveNote(duplicatenotes)
    console.log("title removed")
    }
    else{
        console.log("title not removed")
    }
}

const loadnotes=()=>{
    try{
    const bufferData = fs.readFileSync('data.json') 
    const dataJSON = bufferData.toString()
    return JSON.parse(dataJSON)
    }
    catch(e){
        console.log(e)
        return[]
    }
}
const saveNote=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('data.json',dataJSON)
}

module.exports={
    removeNote:removeNote
}