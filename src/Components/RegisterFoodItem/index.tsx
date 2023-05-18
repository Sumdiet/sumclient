import { MdOutlineDeleteOutline } from "react-icons/md";
import RegisterFoodItemProps from "./RegisterFoodItemProps";
import { RequestsClient } from "../../API/RequestsClient";
import { HomeContext } from "../../Context/HomeContext";
import React from "react";

export default function RegisterFoodItem(props: RegisterFoodItemProps) {
    const { setReload, reload } = React.useContext(HomeContext);
    const removeRegistredFood = () => {
        RequestsClient.deleteRegisterFood(props.registerFood.registeredFoodId).then(()=> {
            setReload(!reload);
        });
    }
    return (
        <li><div className='list-item'><span>{props.registerFood.food.foodName}</span><div className='tail'><span>{props.registerFood.quantity}g</span><button onClick={removeRegistredFood}><MdOutlineDeleteOutline/></button></div></div></li>
            )
}