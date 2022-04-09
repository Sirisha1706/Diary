import {useState} from 'react';
import './Newnotes.css';
import Noteform from './Noteform';
const Newnotes = (props) =>{
    const [isEditing , setIsEditing]=useState(false);
    const savenoteshandler =(notes) =>{
        const notesdata ={
            ...notes,
            id: Math.random(),
        };
        props.onAddnotes(notesdata);
        setIsEditing(false);
    };
    const startEditingHandler=() =>{
        setIsEditing(true);
    };

    const stopEditingHandler=()=>{
        setIsEditing(false);
    };
    return (
        <div className="new-notes">
            {!isEditing &&(<button onClick={startEditingHandler}>Add Notes</button>)}
            {isEditing && (<Noteform onSavenotes={savenoteshandler} onCancel={stopEditingHandler}/>)}
        </div>
    );
};

export default Newnotes;