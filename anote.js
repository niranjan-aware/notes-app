const fs=require('fs')
const addNote=(title,body)=>{
   // console.log("asas")
    const notes=loadnotes()
    //console.log(notes)
    const duplicatenotes = notes.filter((note)=>{
        return note.title == title
    })
    //console.log(duplicatenotes.length)
    if(duplicatenotes.length == 0){
        notes.push({
            title:title,
            body:body
        })
        saveNote(notes)
        console.log("new note added")
    }
    else{
        console.log("title already taken")
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
    addNote:addNote
}