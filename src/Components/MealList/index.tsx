import { HomeContext } from "../../Context/HomeContext";
import MealCard from "../MealCard";
import MealListProps from "./type";
import React from 'react'

export default function MealList() {

  const { user } = React.useContext(HomeContext);
    const rows: JSX.Element[] = [];
    if (!user!.meals) return (<></>);
    if ( user!.meals.length == 1) {
      rows.push(
        <MealCard key={user!.meals[0].mealId} mealId={user!.meals[0].mealId} mealName={user!.meals[0].mealName} macroGoal={user!.meals[0].macroGoal} mealTime={user!.meals[0].meaTime} registeredFood={user!.meals[0].registeredFood} />
      )
      return  <>
                {rows}
              </>
    }
    for (let i = 0; i < user!.meals.length; i += 2) {
        const row: JSX.Element[] = [];
        row.push(
          <MealCard key={user!.meals[i].mealId} mealId={user!.meals[i].mealId} mealName={user!.meals[i].mealName} macroGoal={user!.meals[i].macroGoal} mealTime={user!.meals[i].meaTime} registeredFood={user!.meals[i].registeredFood} />
        );
        if (i + 1 < user!.meals.length) {
            row.push(
              <MealCard key={user!.meals[i+1].mealId } mealId={user!.meals[i+1].mealId} mealName={user!.meals[i + 1].mealName} macroGoal={user!.meals[i + 1].macroGoal} mealTime={user!.meals[i + 1].meaTime} registeredFood={user!.meals[i + 1].registeredFood}/>
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