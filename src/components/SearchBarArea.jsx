import {useState} from 'react';



import SearchBar from './SearchBar';
import FilterMenu from './FilterMenu';

function SearchBarArea(props) {

const [search, setSearch] = useState('');
const [filter, setFilter] = useState('');

  const onSubmitHandler = (event) => {
  	event.preventDefault();
    if (search !== '' && filter !== ''){
          const searchTerm = {
      'search': search,
      'filter': filter
    };
    props.handleSearch(searchTerm);
  }
  }

  const handleSearchBar = (value) => {
  	setSearch(value);
  }

  const handleSelect = (value) => {
  	setFilter(value);
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div  className="block sm:flex justify-between my-2">
        <SearchBar handleSearchBar={handleSearchBar} />
        <FilterMenu handleSelect={handleSelect} />
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id="submit">Search</button>
      </form>
    </>
  );
}
export default SearchBarArea;
