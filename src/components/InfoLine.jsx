

function InfoLine({name, value}) {
  // const isApi = (value) =>{
  // 	if(value.includes('https') || Array.isArray(value)){
  // 		return true;
  // 	}
  // 	return false;
  // }

  return (
    <>
		<div key={name}><strong>{name}:</strong> {value} </div>
    </>
  );
}
export default InfoLine;



