import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL, API_KEY } from "../../Api/Api"
import Cart from "../cart/cart";
import ProductList from "../cart/productList";
import Loader from "../loading/loader";
import GoodList from "./goodList";


function Main() {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true);
  const [madalCart, setMadalCart] = useState(false);
  const [order, setOrder] = useState([]);

  const handlerMadalCart = () => {
    setMadalCart(!madalCart)
  }

  const removBacketList = (itemID) => {
    const newOrder = order.filter((item) => item.id !== itemID)
    setOrder(newOrder)
    toast.error("Backet list deleted")
  }

  const incrementBacket = (itemID) => {
    const newOrder = order.map(el => {
      if (el.id === itemID) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity
        }
      }else {
        return el
      }
    })
    setOrder(newOrder)
    toast.success("Added to cart")
  }

  const decrementBacket = (itemID) => {
    const newOrder = order.map(el => {
      if (el.id === itemID) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity: newQuantity >= 1 ? newQuantity : 1
        }
      }else {
        return el
      }
    })
    setOrder(newOrder)
    toast.error("Removed from cart")
  }

  const resetBacket = (itemID) => {
    const newOrder = order.map(el => {
      if (el.id === itemID) {
        const newQuantity = el.quantity = 1
        return {
          ...el,
          quantity: newQuantity 
        }
      }else {
        return el
      }
    })
    setOrder(newOrder)
    toast.warning("Fell to one")
  }

  const addToBacket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem
        }
      });
      setOrder(newOrder)
    }
    toast.success("Add to backet")
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then(res => res.json())
      .then((Api) => {
        Api.featured && setGoods(Api.featured)
        setLoading(false)
      })

    // eslint-disable-next-line
  }, [])


  return (
    <div className="container">
      {loading ? <Loader /> : <GoodList goods={goods} addToBacket={addToBacket} />}
      <Cart quantity={order.length} handlerMadalCart={handlerMadalCart} />
      {madalCart && <ProductList order={order} handlerMadalCart={handlerMadalCart} removBacketList={removBacketList} incrementBacket={incrementBacket} decrementBacket={decrementBacket} resetBacket={resetBacket}/>}
    </div>
  );
}

export default Main;