import Macro from "../../model/Macro";
import RegistredFood from "../../model/RegistredFood";

export default interface MealCardProps {
    mealTime: string,
    mealName: string,
    macroGoal: Macro,
    registeredFood: RegistredFood[]
    mealId: number

}