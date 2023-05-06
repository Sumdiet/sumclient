import {BsChevronDown} from 'react-icons/bs'
import './style.sass'
import MealCardProps from './type'
export default function MealCard(props: MealCardProps) {
    return (
        <div className="meal-card">
            <div className="meal-header">
                <span>
                    {props.mealTime}
                </span>
                <BsChevronDown className="icon"></BsChevronDown>
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
    )
}