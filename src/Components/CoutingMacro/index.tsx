import CoutingMacroProps from './type'
import './style.sass'
export default function CoutingMacro(props: CoutingMacroProps) {
    const water = props.goalMacro.water! || 0
    const protein = props.goalMacro.protein! || 0;
    const carb = props.goalMacro.carbs! || 0;
    const fat = props.goalMacro.fat! || 0;
    return(
        <section className='macros'>
            <div className="card-macro">
                <h1>
                    Água
                </h1>
                <div className='values'>
                    <span>
                        {props.currentMacro.water || 0}ml / {water}ml
                    </span>
                    <div id='water'></div>
                </div>
            </div>
            <div className="card-macro">
                <h1>
                    Proteína
                </h1>
                <div className='values'>
                    <span>
                    {props.currentMacro.protein || 0}g / {protein}g
                    </span>
                    <div id='protein'></div>
                </div>
            </div>
            <div className="card-macro">
                <h1>
                    Carboidrato
                </h1>
                <div className='values'>
                    <span>
                    {props.currentMacro.carbs || 0}g / {carb}g
                    </span>
                    <div id='carb'></div>
                </div>
            </div>
            <div className="card-macro">
                <h1>
                    Gordura
                </h1>
                <div className='values'>
                    <span>
                    {props.currentMacro.fat || 0}g / {fat}g
                    </span>
                    <div id='fat'></div>
                </div>
            </div>
        </section>
    )
}