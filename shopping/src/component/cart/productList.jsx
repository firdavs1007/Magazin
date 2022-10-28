import ProductItem from "./productItem";


function ProductList(props) {
    const {order, handlerMadalCart = Function.prototype} = props



    const totalPrice = order.reduce((sum, el) => {
        return(
            sum + el.price * el.quantity
        )
    }, 0)
    return ( 
        <>
         {/* {madalCart ?
            <> */}
                <div className="madal_cart_product" onClick={handlerMadalCart} ></div>
                    <div className="card card_title">
                        <div className="card-footer bg-info text-white">
                            Product Name
                        </div>
                        <ul className="list-group list-group-flush">
                            {order.length ?
                                order.map(item => (
                                   <ProductItem {...item} removBacketList={props.removBacketList} incrementBacket={props.incrementBacket} decrementBacket={props.decrementBacket} resetBacket={props.resetBacket} />
                                ))
                                :
                                <li className="list-group-item">Nothing here</li>
                            }
                        </ul>
                        <div className="card-footer bg-info text-white">
                            Total Price: <b>$</b> {totalPrice}
                        </div>
                        
                    </div>
                {/* </>
                :
                null
            } */}
        </>
     );
}

export default ProductList;

// onClick={handlerMadalCart}