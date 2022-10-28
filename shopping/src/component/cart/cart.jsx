import "./cart.css"


export const productsName = [
    { name: "sfrgf", price: "3000" },
    { name: "trrtg", price: "4000" },
    { name: "btrhr", price: "5000" },
    { name: "cesec", price: "2000" },
]

function Cart(props) {
    const { quantity = 0, handlerMadalCart = Function.prototype} = props
    return (
        <>
            <div className="cart" onClick={handlerMadalCart}>
                <i className="bi bi-cart3"><span>{quantity}</span></i>
            </div>
           
        </>
    );
}

export default Cart;