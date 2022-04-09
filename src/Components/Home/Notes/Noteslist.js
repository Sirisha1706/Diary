
import Notesitem from "./Notesitem";
import './Noteslist.css';

const Noteslist = props =>{
    return(
        <ul className="notes-list">
            {props.items.map((notes) =>(
                <Notesitem
                    key = {notes.id}
                    id = {notes.id}
                    header = {notes.header}
                    notes = {notes.notes}
                    date = {notes.date}
                 />   
            ))}
            
        </ul>
    );
};

export default Noteslist;