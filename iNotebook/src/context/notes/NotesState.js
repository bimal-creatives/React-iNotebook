import NoteContext from "./notesContext";
import { useState } from "react";

const NoteState = (props)=>{

    const notesInitial = [
        {
            "_id": "62a353141268cf09f2d6d678",
            "user": "62a342ca671a8569a0c7a086",
            "title": "My title",
            "description": " please wake up early",
            "tag": "personal",
            "date": "2022-06-10T14:20:04.111Z",
            "__v": 0
          }
        
    ]
    const [notes, setNotes] = useState(notesInitial)

// Add a Note
const addNote = (title, description, tag)=>{
    // TODO: API Call
    console.log("Adding a new note")
    const note = {
      "_id": "61322f119553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a0664",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setNotes(notes.concat(note)) 
  }

  // Delete a Note
  const deleteNote = (id)=>{
    // TODO: API Call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)

  }
  // Edit a Note
  const editNote = (id, title, description, tag)=>{

  }
  
    return (
        <NoteContext.Provider value={{notes, addNote,deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 