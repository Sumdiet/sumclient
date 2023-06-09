import React, { useState } from 'react'
import CoutingMacro from '../../Components/CoutingMacro'
import Header from '../../Components/Header'
import PieChartComponent from '../../Components/PieChart'
import ProgressArc from '../../Components/ProgressArc'
import Resume from '../../Components/Resume'
import { HomeContext } from '../../Context/HomeContext'
import './style.sass'
import { useEffect } from 'react'
import MealList from '../../Components/MealList'
import { RequestsClient } from '../../API/RequestsClient'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const { user, setUser, reload, date } = React.useContext(HomeContext);
    const navigate = useNavigate();
    useEffect(() => {
        const id =  localStorage.getItem('idUser');
        
            
        RequestsClient.getLogedUserAsync(Number(id), date ).then((res) => {
            setUser(res!);
        }).catch(() =>{
            navigate('/');
            return;
        });
        
    }, [reload])

   
    return(
        user?.macroGoal && <>
            <section id='home'>
                <div id="header">
                    <Header/>

                </div>
                <div id="lateral">
                    <div className='box-shadow'>
                        <ProgressArc currentMacro={user.currentMacro} goalMacro={user.macroGoal}/>
                    </div>
                    <div className='box-shadow'>
                        <CoutingMacro goalMacro={user.macroGoal} currentMacro={user.currentMacro} water={user.water}/>
                    </div>
                    <div className='box-shadow'>
                        <PieChartComponent currentMacro={user.currentMacro}/>
                    </div>
                </div>
                <div id="central">
                    <Resume meals={user.meals} macroGaol={user.macroGoal} currentGoal={user.currentMacro}/>
                    <div className='meal-cards'>
                        <MealList />
                    </div>
                </div>
                <div id="footer">Footer</div>
            </section> </>
    )
}