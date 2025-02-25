/* eslint-disable react/prop-types*/
import { formatCurrency } from "../../utilities/helpers";
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
console.log(isLoadingIngredients,ingredients);

  return (
    <li className="py-3">
      <div className="flex justify-between items-center text-sm gap-4">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500"> {isLoadingIngredients ? 'loading...' : ingredients.join(',')} </p>
    </li>
  );
}

export default OrderItem;
