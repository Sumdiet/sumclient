import ResumeProps from './type'
import './styles.sass'
import Calendar from '../Calendar';
import React, { useState } from 'react';
import { HomeContext } from '../../Context/HomeContext';
import { IoMdAddCircle } from 'react-icons/io';
export default function Resume(props: ResumeProps) {
    const mealDone = () => {
        let countDone = 0;
        let countRest = 0;
        props.meals.forEach((meal) => {
            if (meal.registeredFood.length) {
                countDone++;
            } else {
                countRest++;
            }
        });
        return [countDone, countRest];
    }
    const [openedCalendar, setOpenedCalendar] = useState(false);
    const { date } = React.useContext(HomeContext);
    const result = mealDone();
    const handleOpenedCalendar = () => {
        setOpenedCalendar(!openedCalendar);
    }

    //Botão de editar meta:
    const [expanded, setExpanded] = useState(false);
    function toggleExpanded() {
        setExpanded(!expanded);
    } 

    //Coleta dos dados do input:
    // const [formData, setFormData] = useState({foodId:4, mealId: 1} as RegistredFood);  
    const handleQuantity = (event: { target: { value: any; }; }) => {
        // setFormData({ ...formData, quantity: event.target.value })
    }
    //Botão para salvar metas:


    return (
        <div id="resume">
            <div id='header'>
                <h1>Resumo</h1>
            </div>
            <div id='resume-values'>
                <div className='box-values'>
                    <button id='editar-area' onClick={() => toggleExpanded()}>
                        Editar
                    </button>
                    <div className='values'> 
                        <h3>{parseFloat(props.macroGaol.kcal).toFixed(2)} Kcal</h3>
                        <p>Sua meta diária</p>
         {expanded &&   <div className='editar-meta'>
                            <h1>Editar metas: </h1>
                            <div className='inputs-div'>
                                <input id='kcal' onChange={handleQuantity} placeholder='Digite a meta de Calorias: '></input>
                                <input id='protein' onChange={handleQuantity} placeholder='Digite a meta de Proteína: '></input>
                                <input id='carbs' onChange={handleQuantity} placeholder='Digite a meta de Carboidratos:'></input>
                                <input id='fat' onChange={handleQuantity} placeholder='Digite a meta de Gordura: '></input>
                                <input id='water' onChange={handleQuantity} placeholder='Digite a meta de consumo de Água: '></input>
                                <button id='salvar-metas'>Salvar</button>
                            </div>
                        </div>
                        }
                    </div>
                    <div className='values'>
                        <h3>{parseFloat(props.currentGoal.kcal || '0').toFixed(2)} Kcal</h3>
                        <p>Valor consumido</p>
                    </div>
                </div>

                <div className='box-values'>
                    <button id='calendar-input' onClick={handleOpenedCalendar}>{date} </button>
                    {openedCalendar ? <Calendar/> :<></>}
                </div>
                <div className='box-values'>
                    <div className='values'>
                        <h3>{result[0]}</h3>
                        <p>Alimentações realizadas</p></div>
                    <div className='values'>
                        <h3>{result[1]}</h3>
                        <p>Alimentações restantes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}