import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./CartSlice";
/* eslint-disable react/prop-types*/

const DeleteItem = ({pizzaId}) => {

    const dispatch = useDispatch()
    return (
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))} >Delete</Button>

    );
};

export default DeleteItem;