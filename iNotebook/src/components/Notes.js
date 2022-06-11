import React, {useContext} from 'react'
import notesContext from "../context/notes/notesContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';



const Notes = () => {
    const context = useContext(notesContext);
    const {notes} = context;
    return (
        <>
        <AddNote/>
        <div className="row my-3">
            <h2>You Notes</h2> 
            {notes.map((note)=>{
                return <Noteitem note={note}/>  
            })}
            </div>
            </>
    )
}

export default Notes