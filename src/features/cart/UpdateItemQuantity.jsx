import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./CartSlice";
/* eslint-disable react/prop-types*/

const UpdateItemQuantity = ({pizzaId,currentQuantity}) => {
    const dispatch = useDispatch()
    return (
        <div className="flex gap-1 md:gap-3 items-center">
            <Button  type="rounded" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span className="flex items-center gap-2 md:gap-3">{currentQuantity}</span>
            <Button  type="rounded"  onClick={()=> dispatch(increaseItemQuantity(pizzaId))}>+</Button>
            {/* <Button>+</Button> */}
        </div>
    );
};

export default UpdateItemQuantity;