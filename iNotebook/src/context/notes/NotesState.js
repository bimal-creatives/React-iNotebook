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
  
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 