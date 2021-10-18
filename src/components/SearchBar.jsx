import {useState, useEffect} from 'react';

function SearchBar(props) {

  const [value, setValue] = useState('');

  const onChangeHandler = (event) => {
  	setValue(event.target.value);
  	props.handleSearchBar(value);
  }

  useEffect(() => {
  	props.handleSearchBar(value);
  }, [value, props]);

  return (
    <>
      <input className="border p-2" style={{ flex: '0 1 80%' }} onChange={onChangeHandler} value ={value} />
    </>
  );
}
export default SearchBar;
