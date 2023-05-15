import {BsChevronDown} from 'react-icons/bs'
import './style.sass'
import MealCardProps from './type'
import { useEffect } from 'react'
import { useState } from 'react';
import {IoMdAddCircle} from 'react-icons/io'
import {MdOutlineDeleteOutline} from 'react-icons/md'
import RegistredFood from '../../model/RegistredFood';
import React from 'react'
import { RequestsClient } from '../../API/RequestsClient';
import { UserFinded } from '../../ViewModel/UserFinded';
import { HomeContext } from '../../Context/HomeContext';
import useDate from '../../Utils/useData';
export default function MealCard(props: MealCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [properties] = useState(props);
    const [registerForm, setRegisterForm] = useState(false);
    const { setReload, reload } = React.useContext(HomeContext);
    const [formData, setFormData] = useState({} as RegistredFood);
    function toggleExpanded() {
        setExpanded(!expanded);
    }

    const registerFood = () => {
        const userId = localStorage.getItem('idUser')
        const registerFoodVm = {...formData, userId: Number(userId), mealId:properties.mealId, date:useDate()} as RegistredFood;
        RequestsClient.postRegisterFood(registerFoodVm).then(() => {
            setReload(!reload);
        });
    }
    

    const handleRegisterForm = () => {
        setRegisterForm(!registerForm);
    }

    const handleQuantity = (event: { target: { value: any; }; }) => {
        setFormData({ ...formData, quantity: event.target.value })
    }

    const handleFood = (event: { target: { value: any; }; }) => {
        setFormData({ ...formData, foodId: event.target.value })
    }


    const registredFood = () => {
        console.log(props)
        const row: JSX.Element[] = [];
        if (properties.registeredFood != null) {
            properties.registeredFood.forEach(registeredFood => {
                if (registeredFood.mealId  == props.mealId) {
                    row.push(
                        <li><div className='list-item'><span>{registeredFood.food.foodName}</span><div className='tail'><span>{registeredFood.quantity}</span><MdOutlineDeleteOutline/></div></div></li>)
                }
            })
        }
        return row;
    }

    return (
        <div className='meal-container'>
            <div className="meal-card">
                <div className="meal-header">
                    <span>
                        {props.mealTime}
                    </span>
                    <BsChevronDown onClick={() => toggleExpanded()} className="icon"></BsChevronDown>
                </div>
                <div className="meal-name">
                    <h2>
                        {props.mealName}
                    </h2>
                </div>
                <div className="meal-values"> 
                    <p>
                        Kcal: {props.macroGoal.kcal}
                    </p>
                    <div  className="meal-macro">
                        <p>
                            Prot: {props.macroGoal.protein}
                        </p>
                        <p>
                            Carb: {props.macroGoal.carbs}
                        </p>
                        <p>
                            Gord: {props.macroGoal.fat}
                        </p>
                    </div>
                </div>
            </div>
            
            {expanded &&
            
                <div className='list-container'>
                    
                     {registerForm && 
                        <div className='register-food'>
                            <label>Quantidade</label>
                            <input className='register-food-input' type="text" onChange={handleQuantity}/>
                            <label>Alimento</label>
                            <input className='register-food-input' type="text" onChange={handleFood}/>
                            <button onClick={registerFood}>Adicionar</button>
                        </div>}
                    <ul className="list" >
                        <li onClick={handleRegisterForm}><IoMdAddCircle/></li>
                        {registredFood()}
                    </ul>
                </div>
            }
        </div>
    )
}