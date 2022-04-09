import './Notesfilter.css'

const Notesfilter = (props) => {
    const dropdownChangeHandler = (event) => {
      props.onChangeFilter(event.target.value);
    };
  
    return (
      <div className='notes-filter'>
        <div className='notes-filter__control'>
          <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='filter'>filter</option>
            <option value='year'>year</option>
            <option value='week'>week</option>
            <option value='month'>month</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default Notesfilter;