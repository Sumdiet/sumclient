import Macro from "./Macro";
import RegistredFood from "./RegistredFood";

export default interface Meal {
    mealId: number,
    mealName: string,
    meaTime: string,
    macroGoal: Macro,
    registeredFood: RegistredFood[]

}