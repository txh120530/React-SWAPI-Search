import {useState, useEffect} from 'react';

function FilterMenu(props) {

  const [value, setValue] = useState('');

  const onChangeHandler = (event) => {
  	setValue(event.target.value);
  }

  useEffect(() => {
  	props.handleSelect(value);
  }, [value, props]);

  return (
      <select className="border" style={{ flex: '0 1 10%' }} onChange={onChangeHandler}>
        <option value="" default>Choose</option>
        <option value="films">Films</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="species">Species</option>
        <option value="starships">Starships</option>
        <option value="vehicles">Vehicles</option>
      </select>
  );
}
export default FilterMenu;
