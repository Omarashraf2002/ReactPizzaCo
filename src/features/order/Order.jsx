// Test ID: IIDSAT

import { calcMinutesLeft, formatCurrency, formatDate } from "../../utilities/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useFetcher, useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem";
import { useEffect } from "react";




function Order() {

  const order = useLoaderData()
  console.log(order);
  const fetcher = useFetcher()

  useEffect(function() {
   if(!fetcher.data && fetch.state ==='idle') fetcher.load('/menu')
  },[fetcher])


  

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="font-semibold text-xl "> Order # {id} Status</h2>

        <div >
          {priority && <span className="bg-red-500 rounded-full text-xs uppercase space-x-2 font-semibold px-3 py-1 text-red-50 tracking-wide">Priority</span>}
          <span className="bg-green-500 rounded-full text-xs uppercase space-x-2 gap-3 font-semibold px-3 py-1 text-green-50 tracking-wide">{status} order</span>
        </div>
      </div>

      <div className="flex justify-between gap-2 items-center flex-wrap bg-stone-300 py-5 px-6">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-stone-500 text-xs">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map(item => <OrderItem item={item} key={item.pizzaId} isLoadingIngredients={fetcher.state ==='loading'} ingredients={fetcher?.data?.find(el=> el.id === item.pizzaId)?.ingredients??[]} />)}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="font-medium text-stone-600 text-sm">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="font-medium text-stone-600 text-sm">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}
export async function loader({params}) {
  const order = await getOrder(params.orderId)
  return order
}

export default Order;
