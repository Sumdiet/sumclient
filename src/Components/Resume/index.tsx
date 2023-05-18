import ResumeProps from './type'
import './styles.sass'
import Calendar from '../Calendar';
import React, { useState } from 'react';
import { HomeContext } from '../../Context/HomeContext';
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
    return (
        <div id="resume">
            <div id='header'>
                <h1>Resumo</h1>
            </div>
            <div id='resume-values'>
                <div className='box-values'>
                    <div className='values'> 
                        <h3>{parseFloat(props.macroGaol.kcal).toFixed(2)} Kcal</h3>
                        <p>Sua meta diária</p>
                    </div>
                    <div className='values'>
                        <h3>{parseFloat(props.currentGoal.kcal || '0').toFixed(2)} Kcal</h3>
                        <p>Valor consumido</p>
                    </div>
                </div>

                <div className='box-values'>
                    <input id='calendar-input' type='button' value={date} onClick={handleOpenedCalendar}/>
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