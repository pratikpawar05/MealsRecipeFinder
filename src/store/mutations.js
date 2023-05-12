
export function setSearchedMeals(state,meals){
    state.searchedMeals=meals || [];
} 
export function setMealsByLetter(state,meals){
    state.mealsByLetter=meals || [];
}
export function setIngredients(state,meals){
    state.ingredients=meals || [];
}
export function setMealsByIngredient(state,meals){
    state.mealsByIngredient=meals || [];
}