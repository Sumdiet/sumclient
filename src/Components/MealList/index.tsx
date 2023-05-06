import MealCard from "../MealCard";
import MealListProps from "./type";

export default function MealList(props: MealListProps) {

    const rows: JSX.Element[] = [];
    for (let i = 0; i < props.meals.length; i += 2) {
        const row: JSX.Element[] = [];
        row.push(
          <MealCard mealName={props.meals[i].mealName} macroGoal={props.meals[i].macroGoal} mealTime={props.meals[i].meaTime} />
        );
        if (i + 1 < props.meals.length) {
            row.push(
              <MealCard mealName={props.meals[i + 1].mealName} macroGoal={props.meals[i + 1].macroGoal} mealTime={props.meals[i + 1].meaTime} />
            );
          }
          rows.push(<div key={i / 2} className="row">{row}</div>);
    }
    return (
        <>
            {rows}
        </>
    )
}