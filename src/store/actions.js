import axiosClient from '../axiosClient';

export function searchMeals({commit},keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=>{
        // debugger;
        commit('setSearchedMeals',data.meals);
    });
} 
export async function searchByLetter({commit},letter) {
    const response = await axiosClient.get(`search.php?f=${letter}`);
    commit('setMealsByLetter',response.data.meals);
    console.log(response.data.meals);
}
export async function getIngredients({commit}) {
    const response = await axiosClient.get(`list.php?i=list`);
    commit('setIngredients',response.data.meals);
    console.log(response.data.meals);
}
export async function searchByIngredient({commit},ingredient) {
    const response = await axiosClient.get(`filter.php?i=${ingredient}`);
    commit('setMealsByIngredient',response.data.meals);
    console.log(response.data.meals);
}
