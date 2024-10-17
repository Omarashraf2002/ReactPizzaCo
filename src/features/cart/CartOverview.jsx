import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCart, getTotalCartPrice } from "./CartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector( getTotalCart)
  const totalPrice = useSelector(getTotalCartPrice)

  if(!totalCartQuantity) return null
  return (
    <div className="bg-stone-800 text-stone-200 uppercase p-4 text-center sm:px-6 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalPrice} pizzas</span>
        <span>${totalCartQuantity}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link> 
    </div>
  );
}

export default CartOverview;
