import React, {useContext} from 'react'
import notesContext from "../context/notes/notesContext"
import Noteitem from './Noteitem';


const Notes = () => {
    const context = useContext(notesContext);
    const {notes, setNotes} = context;
    return (
        <div className="row my-3">
            <h2>You Notes</h2> 
            {notes.map((note)=>{
                return <Noteitem note={note}/>  
            })}
            </div>
    )
}

export default Notes