import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import { addItem, getCurrentQuantityById } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";
/* eslint-disable react/prop-types*/



function MenuItem({ pizza }) {

  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id))
  const isInCart = currentQuantity > 0

function handleAddToCart() {
  const newItem = {
    pizzaId: id,
    name ,
    quantity: 1 ,
    unitPrice ,
    totalPrice: unitPrice * 1 ,
  }  

  dispatch(addItem(newItem))

}

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'grayscale opacity-70' : ''}`} />
      <div className="flex flex-col grow" >
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize text-stone-500 italic">{ingredients.join(', ')}</p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="uppercase font-medium text-sm text-stone-500">Sold out</p>}
          { isInCart && <DeleteItem pizzaId={id} />}
          { !soldOut && !isInCart && <Button onClick={handleAddToCart} type="small" >Add to Cart</Button>}
          
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
