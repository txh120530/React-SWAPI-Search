import {useState} from 'react';


import SearchBarArea from './components/SearchBarArea';
import ResultsList from './components/ResultsList';

function App() {
  const [search, setSearch] = useState('');


  const handleSearch = (value) => {
    setSearch(value);
  }

  return (
    <>
      <div className="ui border max-w-3xl my-12 mx-auto p-3">
      <SearchBarArea handleSearch={handleSearch} />
      {search === '' && <p>Enter a Search Term and Category</p>}
      {search !== '' && <ResultsList search={search} newSearchProp={true} />}
      
      </div>
    </>
  );
}

export default App;
