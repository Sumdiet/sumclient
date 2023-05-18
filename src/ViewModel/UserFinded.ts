import Macro from "../model/Macro";
import Meal from "../model/Meal";
import { UserInformation } from "../model/UserInformation";

export interface UserFinded  {
    email: string;
    userId: number;
    userName: string;
    userInformation: UserInformation;
    macroGoal: Macro;
    currentMacro: Macro
    meals: Meal[]
    token:string
    water: number
}