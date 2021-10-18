import axios from 'axios'
import Fuse from 'fuse.js'
import {useState, useEffect} from 'react';

import InfoBlock from './InfoBlock';

// TODO: Figure out how to properly reset the screen with new search
function ResultsList({search, newSearchProp}) {
  const [filter, setFilter] = useState(search);
  const [newSearch, setNewSearch] = useState(newSearchProp);
  const [url, setUrl] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() =>{
  	setFilter(search);
  	setUrl(`https://swapi.dev/api/${search.filter}/`);
  	setFilteredResults([]);
  	setNewSearch(true);
  }, [search]);

  useEffect(() =>{
  	getResults(url);
  }, [url]);



  const getResults = (axiosUrl) =>{
  	if(axiosUrl !==''){
  	axios.get(axiosUrl)
      .then(res => {
        
	    getResults(res.data.next);
		const fuse = new Fuse(res.data.results, {
			keys:[
		 	"name",
		 	"title"],
		 	 shouldSort: true,
		 	 threshold: .3

		});
		setNewSearch(false);
		const results = fuse.search(filter.search);
		if(results !== []){
		setFilteredResults((prevState) => {
	    	const newState = prevState.concat(results);
	  		return newState;
		});	
		}

      })
      .catch(error => console.error(`Error: ${error}`));
      } 
  }
// TODO: No Results Found Screen
  return (
    <>
      {filteredResults !== [] && filteredResults.map((obj, i) =>(
      		<InfoBlock obj={obj}  />
      	))}
      {newSearch === true && <p>Loading...</p>}
    </>
  );
}
export default ResultsList;
