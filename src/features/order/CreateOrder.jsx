// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCart } from "../cart/CartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../Store"
import { formatCurrency } from "../../utilities/helpers";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );
  console.log(isValidPhone);
  


  function CreateOrder() {
    const dispatch = useDispatch()
    const [withPriorty, setWithPriorty] = useState(false)
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const formErrors = useActionData()  
  const {username, status: addressStatus, position, address,error: errorAddress} = useSelector(state => state.user)
  const isLoadingAddress = addressStatus ==='loading'

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCart)
  const priortyPrice = withPriorty ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priortyPrice
  console.log(cart);

  if(!cart.length) return <EmptyCart />


  return (
    <div className="px-4 py-3">
      <h2 className="font-semibold text-xl mb-8">Ready to order? Lets go!</h2>


      <Form method="POST">
        <div className="flex mb-5 gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input w-full" defaultValue={username} type="text" name="customer" required />
        </div>

        <div className="flex mb-5 gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div>
            <input className="input w-full" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p className="text-xs mt-2 text-red-700 bg-red-100 rounded p-2">{formErrors.phone}</p> }
        </div>

        <div className="flex mb-5 gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div>
            <input
            className="input w-full"
             type="text" name="address"disabled={isLoadingAddress} defaultValue={address} required />
          </div>
        </div>
        {addressStatus === 'error' && <p className="text-xs mt-2 text-red-700 bg-red-100 rounded p-2">{errorAddress}</p> }

       { !position.latitude && !position.longtitude && <span className="absolute right-[3px] z-50">

        <Button disabled={isSubmitting || isLoadingAddress} type="small" onClick={(e) => { e.preventDefault(); dispatch(fetchAddress())}}>Get Position</Button>
        </span>}


        <div className="mb-12 flex gap-5 items-center">
          <input
          className="h-6 w-6 accent-yellow-300
          focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriorty}
            onClick={(e) => setWithPriorty(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">Want to give your order priority?</label>
        </div>

        {/* Hidden input to include cart data */}
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input type="hidden" name="position" value={ position.longtitude ?  `${position.latitude},${position.longtitude} ` : ""} />
        <div>
          <Button disabled={isSubmitting} type="primary" >
            { isSubmitting ? "Placing Order..." : `Order now from ${formatCurrency(totalPrice)} `}
            </Button>
        </div>
      </Form>

    </div>
  );
}


export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data); // Log the form data

  const order = {
    ...data,
    cart: JSON.parse(data.cart), // Parse the cart string into an object
    priority: data.priority === "true", // Convert priority checkbox value
  };

  const errors = {}
  if(!isValidPhone(order.phone)) errors.phone = "Please give us your correct phone number"
  if(Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);
  store.dispatch(clearCart())
  return redirect(`/order/${newOrder.id}`);
  
  
}

export default CreateOrder;
