import CoutingMacroProps from './type'
import './style.sass'
import axios from 'axios';
import { useContext, useState } from 'react';
import { RequestsClient } from '../../API/RequestsClient';
import { HomeContext } from '../../Context/HomeContext';
import RegistredFood from '../../model/RegistredFood';



export default function CoutingMacro(props: CoutingMacroProps) {
    const water = props.goalMacro.water! || 0
    const protein = props.goalMacro.protein! || 0;
    const carb = props.goalMacro.carbs! || 0;
    const fat = props.goalMacro.fat! || 0;
    const {reload, date, setReload} = useContext(HomeContext)

    const [expanded, setExpanded] = useState(false);
    
    function toggleExpanded() {
        setExpanded(!expanded);
    }
    
    // const handleAddWater = async () => {
    //     try {
    //       const response = await axios.post('/api/v1/food', { water: 100 }); 
    //           console.log(response.data); 

    //       // const updatedWaterValue = response.data.water;
    //       // props.setCurrentMacro({ ...props.currentMacro, water: updatedWaterValue });
    //     } catch (error) {
    //       console.error('Erro ao adicionar água:', error);
    //     }
    //   };

    const handleQuantity = (event: { target: { value: any; }; }) => {
        setFormData({ ...formData, quantity: event.target.value })
    }

    const [formData, setFormData] = useState({foodId:4, mealId: 1} as RegistredFood);  
    const registerWater = () => {
        const userId = localStorage.getItem('idUser')
        const registerFoodVm = {...formData, userId: Number(userId) , date:date} as RegistredFood;
        RequestsClient.postRegisterFood(registerFoodVm).then(() => {
            setReload(!reload);
            setExpanded(!expanded);
        });
      };
        
    console.log(props.water)

    return(
        <section className='macros'>
                <div className='macro-container'>    
                    <div className="card-macro">
                        <h1>
                            Água
                        </h1>
                        <div className='values'>
                            <span>
                                {(props.water || 0).toFixed(2)}ml / {water}ml
                            </span>
                            <div id='water'></div>
                        </div>
                    </div>  
                        <button onClick={() => {toggleExpanded()}} id="buttonExpand">+</button>
                </div>
        {expanded &&    
                    <div id='teste'>
                        <div id='newTeste'>
                            <input id='inputData' onChange={handleQuantity} placeholder='Digite a quantidade de agua: '></input>
                            <button id='addButton' onClick={registerWater}>Adicionar</button>
                        </div>
                    </div>    
                    
        } 
            <div className='macro-container'> 
                <div className="card-macro">
                    <h1>
                        Proteína
                    </h1>
                    <div className='values'>
                        <span>
                        {parseFloat(props.currentMacro.protein || 0).toFixed(2)}g / {protein}g
                        </span>
                        <div id='protein'></div>
                    </div>
                </div>
                <div className='sp'></div>
            </div>
            <div className='macro-container'>
                <div className="card-macro">
                    <h1>
                        Carboidrato
                    </h1>
                    <div className='values'>
                        <span>
                        {parseFloat(props.currentMacro.carbs || 0).toFixed(2)}g / {carb}g
                        </span>
                        <div id='carb'></div>
                    </div>
                </div>
                <div className='sp'></div>
            </div>
            <div className='macro-container'>
                <div className="card-macro">
                    <h1>
                        Gordura
                    </h1>
                    <div className='values'>
                        <span>
                        {parseFloat(props.currentMacro.fat || 0).toFixed(2)}g / {fat}g
                        </span>
                        <div id='fat'></div>
                    </div>
                </div>
                <div className='sp'></div>
            </div>
        </section>
    )
}