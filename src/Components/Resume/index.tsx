import ResumeProps from './type'
import './styles.sass'
import Calendar from '../Calendar';
import React, { useState, useContext } from 'react';
import { HomeContext } from '../../Context/HomeContext';
import Macro from '../../model/Macro';
import UpdateMacroGoal from '../../ViewModel/UpdateMacroGoal';
import { RequestsClient } from '../../API/RequestsClient';

export default function Resume(props: ResumeProps) {
    const {user, setReload, reload} = useContext(HomeContext);
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
           const [formData, setFormData] = useState({MacroId: user!.macroGoal.macroId} as UpdateMacroGoal);  
           const handleKcal = (event: { target: { value: any; }; }) => {
                setFormData({ ...formData, Kcal: event.target.value })
                
            }
            const handleWater = (event: any) => {
                setFormData({ ...formData, Water: event.target.value })

            }

            const handleCarbs = (event: any) => {
                setFormData({ ...formData, Carbs: event.target.value })
            }

            const handleProtein = (event: any) => {
                setFormData({ ...formData, Protein: event.target.value })

            }
            
            const handleFat = (event: any) => {
                setFormData({ ...formData, Fat: event.target.value })
            }

    //Botão para salvar metas:
    const registerGoal = () => {
        console.log(formData);
        RequestsClient.UpdateMacroGoal(formData).then(() => {
            setReload(!reload);
            setExpanded(!expanded);
        });
      };

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
                                <input id='kcal' onChange={handleKcal} placeholder='Digite a meta de Calorias: '></input>
                                <input id='protein' onChange={handleProtein} placeholder='Digite a meta de Proteína: '></input>
                                <input id='carbs' onChange={handleCarbs} placeholder='Digite a meta de Carboidratos:'></input>
                                <input id='fat' onChange={handleFat} placeholder='Digite a meta de Gordura: '></input>
                                <input id='water' onChange={handleWater} placeholder='Digite a meta de consumo de Água: '></input>
                                <button id='salvar-metas' onClick={registerGoal}>Salvar</button>
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