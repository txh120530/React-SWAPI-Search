

function InfoLine({name, value}) {

  function titleCase(s) { 
      return s
          .replace(/([^A-Z])([A-Z])/g, '$1 $2') // split cameCase
          .replace(/[_\-]+/g, ' ') // split snake_case and lisp-case
          .toLowerCase()
          .replace(/(^\w|\b\w)/g, function(m) { return m.toUpperCase(); }) // title case words
          .replace(/\s+/g, ' ') // collapse repeated whitespace
          .replace(/^\s+|\s+$/, ''); // remove leading/trailing whitespace
  }

  const isApi = (value) =>{
  	if(value.includes('https') || Array.isArray(value)){
  		return true;
  	}
  	return false;
  }

  return (
    <>
    {isApi(value) === false && <div key={name}><strong class="block text-xl text-blue-500">{titleCase(name)}:</strong> {value} </div>}
		
    </>
  );
}
export default InfoLine;



