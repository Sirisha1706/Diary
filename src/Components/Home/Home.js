import {useState} from 'react';
import Newnotes from "./Newnotes/Newnotes";
import Notes from "./Notes/Notes";

const dummynotes = [
    {
        id: 1,
        header: 'first day of school',
        notes: 'Today I went to my new school which was amazing but was feeling very nervous because it was my first day of school my new school is very big and I made new friends I sit in 1st bench with my new classmates they are very good and caring and loving.',
        date: new Date(2022, 3, 7),
    },
    {
        id: 2,
        header: 'fun day',
        notes: 'I woke up at 6 oclock in the morning. We had breakfast and dressed up. Today we all went to Fantasize Amusement park near Pune. We started from home at 7 oclock. As soon as we reached there, we bought our tickets and went inside. I was so excited seeing the rides. My parents and brother liked the Thunderfall ride. My favorite rides were Water Splash, Caterpillar Ride, Wave Pool and Pirate Ship. After a couple of hours, we had our lunch. In the afternoon we had the scariest ride that is the Space Gun. We got back to our home in the evening. It was a great day and I enjoyed a lot.',
        date: new Date(2022, 4, 5), 
    }
];
const Home =() =>{
   const [notes, setnotes] = useState(dummynotes);
   const addnoteshandler = note =>{
        setnotes(prevnotes =>{
            return [note, ...prevnotes];
        });
   };
    return (
        <>
        <Newnotes onAddnotes={addnoteshandler}/>
        <Notes items={notes}/>
        </>
    );
};

export default Home;