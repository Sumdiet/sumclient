import React from 'react'
import CoutingMacro from '../../Components/CoutingMacro'
import Header from '../../Components/Header'
import PieChartComponent from '../../Components/PieChart'
import ProgressArc from '../../Components/ProgressArc'
import Resume from '../../Components/Resume'
import { HomeContext } from '../../Context/HomeContext'
import './style.sass'
import MealList from '../../Components/MealList'
export default function Home() {
    const { user } = React.useContext(HomeContext);
    
    return(
            <section id='home'>
                <div id="header">
                    <Header/>
                </div>
                <div id="lateral">
                    <div className='box-shadow'>
                        <ProgressArc currentMacro={user.currentMacro} goalMacro={user.macroGoal}/>
                    </div>
                    <div className='box-shadow'>
                        <CoutingMacro goalMacro={user.macroGoal} currentMacro={user.currentMacro}/>
                    </div>
                    <div className='box-shadow'>
                        <PieChartComponent currentMacro={user.currentMacro}/>
                    </div>
                </div>
                <div id="central">
                    <Resume meals={user.meals} macroGaol={user.macroGoal} currentGoal={user.currentMacro}/>
                    <div className='meal-cards'>
                        <MealList  meals={user.meals}/>
                    </div>
                </div>
                <div id="footer">Footer</div>
            </section>
    )
}