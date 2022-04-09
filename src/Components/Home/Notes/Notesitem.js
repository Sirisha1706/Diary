import { useState } from "react";
import Card from "../../UI/Card/Card";
import Notedate from './Notedate';
import './Notesitem.css';

const Notesitem = props =>{
    const [list , setlist] = useState([props]);
    
    const removeHandler =(id) =>{
        const newlist = list.filter((item) =>item.id !=id);
        setlist(newlist);
    };
    return (
        <li key={props.id}>
        <Card className='notes-item'>
            <Notedate date = {props.date}/>
            <div className="notes-item__notes">
            <h1>{props.header}</h1>
            <p>{props.notes}</p>
            </div>
            <button onClick={()=>removeHandler(props.id)}>DELETE</button>
        </Card>
        </li>
    );
};

export default Notesitem;