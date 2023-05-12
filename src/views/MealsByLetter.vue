<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
    </div>
    <div class="px-8 pb-3">
        <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
            <router-link :to="{name:'byLetter', params:{letter}}" 
            v-for="letter of letters"
            :key="letter"
            @click="searchByLetter(letter)"
            class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
             {{ letter }}
            </router-link>
        </div>
    </div>
    <div >
        <Meals :meals="meals"/>
        <!-- <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal }}">
            <img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-xl w-full h-48 object-cover">
        </RouterLink>
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <h4>{{ meal.strInstructions.substring(1, 70) }}</h4>
            <div class="flex m-8 items-center justify-between">
                <a :href="meal.strYoutube" target="_blank" class="p-2 bg-orange-600 rounded border-2 text-white">Youtube</a>
            </div>
        </div> -->
    </div>

</template>
<script setup>
import { computed, onMounted,ref } from 'vue';

import store from '../store';
import Meals from '../components/Meals.vue';

//
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//Get meals
const meals = computed(() => store.state.mealsByLetter);

async function searchByLetter(letter) {
    store.dispatch('searchByLetter',letter);
}
</script>

<style>
</style>