const fs=require('fs')
const listNote = () => {
    const notes = loadnotes()

    console.log('Your notes')

    notes.forEach((note) => {
        console.log(note.title)
    })
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
    listNote:listNote
}