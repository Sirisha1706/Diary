import { useState } from 'react';
import Card from '../../UI/Card/Card';
import Noteslist from './Noteslist';
import Notesfilter from './Notesfilter';
import './Notes.css';

const Notes = props =>{
    const [filter, setFilter] = useState(' ');
    
  const filterChangeHandler = selected => {
    setFilter(selected);
  };
    const filteredNotes = props.items.sort((a,b) => (b.date-a.date));
    return(
        <Card className='notes'>
            <Notesfilter selected={filter} 
        onChangeFilter={filterChangeHandler}/>
            <Noteslist items={filteredNotes}/>
        </Card>
    );
};

export default Notes;