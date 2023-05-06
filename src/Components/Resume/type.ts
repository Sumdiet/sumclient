import Macro from "../../model/Macro";
import Meal from "../../model/Meal";

export default interface ResumeProps {
    meals: Meal[];
    macroGaol: Macro;
    currentGoal: Macro

}