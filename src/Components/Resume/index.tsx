import ResumeProps from './type'
import './styles.sass'
export default function Resume(props: ResumeProps) {
    const mealDone = () => {
        let countDone = 0;
        let countRest = 0;
        props.meals.forEach((meal) => {
            if (meal.registredFood) {
                countDone++;
            } else {
                countRest++;
            }
        });
        return [countDone, countRest];
    }
    const result = mealDone();
    return (
        <div id="resume">
            <div id='header'>
                <h1>Resumo</h1>
            </div>
            <div id='resume-values'>
                <div className='box-values'>
                    <div className='values'> 
                        <h3>{props.macroGaol.kcal} Kcal</h3>
                        <p>Sua meta diária</p>
                    </div>
                    <div className='values'>
                        <h3>{props.currentGoal.kcal} Kcal</h3>
                        <p>Valor consumido</p>
                    </div>
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