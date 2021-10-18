import InfoLine from './InfoLine';


function InfoBlock({obj}) {
  console.log("InfoBlock: ", obj.item);

  return (
    <>
    <div className="border my-3 rounded-md p-2">
          {
          	Object.entries(obj.item).map(([key,value]) => (
          		<div id={key}>
          		  <InfoLine name={key} value={value} />
          		</div>
          	))  
          }   
    </div>
    </>
  );
}
export default InfoBlock;
