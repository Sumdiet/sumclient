import {BsChevronDown} from 'react-icons/bs'
import './style.sass'
import MealCardProps from './type'
import { useEffect } from 'react'
import { useState } from 'react';
import {IoMdAddCircle} from 'react-icons/io'
import RegistredFood from '../../model/RegistredFood';
import React from 'react'
import { RequestsClient } from '../../API/RequestsClient';
import { HomeContext } from '../../Context/HomeContext';
import RegisterFoodItem from '../RegisterFoodItem';
import Food from '../../model/Food';
export default function MealCard(props: MealCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [registerForm, setRegisterForm] = useState(false);
    const { setReload, reload,date } = React.useContext(HomeContext);
    const [formData, setFormData] = useState({foodId:0} as RegistredFood);
    const [food, setFood] =useState([] as Food[]);
    function toggleExpanded() {
        setExpanded(!expanded);
    }

    const registerFood = () => {
        const userId = localStorage.getItem('idUser')
        const registerFoodVm = {...formData, userId: Number(userId), mealId:props.mealId, date:date} as RegistredFood;
        RequestsClient.postRegisterFood(registerFoodVm).then(() => {
            setReload(!reload);
            setRegisterForm(!registerForm);
        });
        setFormData({foodId:0} as RegistredFood)
    }

    

    useEffect(() => {
        if(!food.length) {
            RequestsClient.getFood().then((foodList) =>{
                console.log('food', foodList)
                setReload(!reload)
                setFood(foodList)
            });
        }
    },[reload])

    const listarAlimento = () => {
        return(
        food.map(food => {
            if (food.foodName != "Água") {
                return   <option key={food.foodId} value={food.foodId}>{food.foodName}</option>
            }
        }))
    }
    

    const handleRegisterForm = () => {
        setRegisterForm(!registerForm);
    }

    const handleQuantity = (event: { target: { value: any; }; }) => {
        setFormData({ ...formData, quantity: event.target.value })
    }

    const handleFood = (event: { target: { value: any; }; }) => {
        setFood([]);
        setReload(!reload);
        setFormData({ ...formData, foodId: food.find(food => food.foodId = event.target.value,)!.foodId })
    }
    


    const registredFood = () => {
        const row: JSX.Element[] = [];
        if (props.registeredFood != null) {
             props.registeredFood.forEach(registeredFood => {
                if (registeredFood.mealId  == props.mealId) {
                    if (registeredFood.foodId != 4) {
                        row.push(
                            <RegisterFoodItem registerFood={registeredFood}></RegisterFoodItem>
                        )}
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
                    <BsChevronDown cursor = 'pointer' onClick={() => toggleExpanded()} className="icon"></BsChevronDown>
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
                            <select className='register-food-input'
                                name='food'
                                onChange={handleFood}
                                value={formData.foodId}
                            >
                                <option value='0' key='0'>Selecionar alimento</option>
                                 {listarAlimento()}
                            </select>
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