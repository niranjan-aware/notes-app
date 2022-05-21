const fs=require('fs')
const readNote=(title)=>{
    const notes=loadnotes()
    const reqnotes=notes.find((note)=>{
        return note.title===title
    })
    if(reqnotes!==0){
        console.log(reqnotes.title)
        console.log(reqnotes.body)
    }
    else{
        console.log("note is absent")
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

module.exports={
    readNote:readNote
}