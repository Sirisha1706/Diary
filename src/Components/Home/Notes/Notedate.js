import './Notedate.css';

const Notedate = props =>{
    const month=props.date.toLocaleString('en-US',{ month:'long'});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});

    return(
    <div className='note-date'>
        <div className='note-date__year'>{year}</div>
        <div className='note-date__month'>{month}</div>
        <div className='note-date__day'>{day}</div>
    </div>
    )
};

export default Notedate;