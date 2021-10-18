

function InfoLine({name, value}) {

  function titleCase(sentence) {
    let sentence = string.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    
    return sentence.join(" ");
  }

  // const isApi = (value) =>{
  // 	if(value.includes('https') || Array.isArray(value)){
  // 		return true;
  // 	}
  // 	return false;
  // }

  return (
    <>
		<div key={name}><strong>{InfoLine(name)}:</strong> {value} </div>
    </>
  );
}
export default InfoLine;



