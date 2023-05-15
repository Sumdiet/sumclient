import Food from "./Food";

export default interface RegistredFood {
    registeredFoodId: number,
    mealId: number,
    food: Food,
    foodId: number,
    quantity: number
    userId:number,
    date: string
}