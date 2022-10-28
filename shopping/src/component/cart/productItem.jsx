import { useContext } from "react";
import { ShopContext } from "../../context";

function ProductItem(props) {
    const {id, name, price, quantity, removBacketList, incrementBacket, decrementBacket, resetBacket } = props;
    
    const {exaple} =useContext(ShopContext);
    console.log(exaple);
    return (
        <>
                <li className="list-group-item d-flex justify-content-between"><div className="ms-2 fs-6">{name.slice(0, 10)}...<span className="ms-2"><b>x</b>{quantity}<b>$</b>{price * quantity}</span></div>
                    <div className="icons">
                        <div className="btn-group me-5" role="group" aria-label="Basic mixed styles example">
                            <button type="button" className="btn btn-danger" onClick={() => decrementBacket(id)}><i className="bi bi-dash-lg"></i></button>
                            <button type="button" className="btn btn-warning" onClick={() => resetBacket(id)}>1</button>
                            <button type="button" className="btn btn-success" onClick={() => incrementBacket(id)}><i className="bi bi-plus-lg"></i></button>
                        </div>
                        <i className="bi bi-trash" onClick={() => removBacketList(id)}></i>
                    </div>
                </li>
        </>
    );
}

export default ProductItem;




























