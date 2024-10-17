// import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utilities/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./CartSlice";
/* eslint-disable react/prop-types*/

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
console.log(pizzaId);
const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))


  return (
    <li className="sm:flex justify-between items-center">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex flex-row items-center justify-between mb-3 sm:gap-5">
        <p>{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId} />
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        </div>
    </li>
  );
}

export default CartItem;
