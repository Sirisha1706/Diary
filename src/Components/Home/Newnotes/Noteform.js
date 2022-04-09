import {useState} from 'react';
import './Noteform.css';

const Noteform = props =>{
    const [enteredHeader, setHeader] = useState(' ');
    const [enteredNotes, setNotes] = useState(' ');
    const [enteredDate, setDate] = useState('');

    const headerChangeHandler = (event) => {
        setHeader(event.target.value);
    };
    const notesChangeHandler = (event) => {
        setNotes(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const notesData = {
            header: enteredHeader,
            notes: enteredNotes,
            date: enteredDate,
        };
        props.onSavenotes(notesData);
        setDate('');
        setHeader('');
        setHeader('');
    };
   

    return (
        <form onSubmit={submitHandler}>
        <div className='new-note__controls'>
            <div className='new-note__control'>
                <label>Header:-</label>
                <input type='text' value={enteredHeader} onChange={headerChangeHandler}></input>
            </div>
            <div className='new-note__control'>
                <label>Date:-</label>
                <input type='date' value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
            <div className='new-note__control'>
                <label>Notes:- </label>
                <textarea type='text' value={enteredNotes} onChange={notesChangeHandler}></textarea>
            </div>
        </div>
        <div className='new-note__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Note</button>
        </div>
    </form>
    );
} ;

export default Noteform;