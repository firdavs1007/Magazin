import GoodItem from "./gooditem";

function GoodList(props) {
    const { goods = [], addToBacket } = props;
    console.log(goods);

    if(!goods.length){
        return <h2>Nothing here</h2>
    }
    return ( 
        <div className="products my-5">
            {goods.map(el =>(
                <GoodItem key={el.id} {...el} addToBacket={addToBacket} />
            ))}               
        </div>
     );
}

export default GoodList;