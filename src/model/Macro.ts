export default interface Macro {
    macroId: number;
    protein: String;
    carbs: string;
    fat: string;
    kcal: string;
    water: string | undefined;
    type: number;
    entityId: number;
}