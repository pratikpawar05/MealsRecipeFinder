<template>
    <div class="p-8">
        <h1 class="text-4xl mb-4 font-bold text-orange-500">
            Meals for {{ ingredient }} 
        </h1>
    </div>
    <div>
        <Meals :meals="meals" />
    </div>
</template>
<script setup>
import store from '../store';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
import Meals from '../components/Meals.vue'

const route = useRoute();
const ingredient=route.params.ingredient;

const meals = computed(() => store.state.mealsByIngredient);

const searchByIngredient=(ingredient)=>{
store.dispatch('searchByIngredient',ingredient);
};
searchByIngredient(ingredient);

</script>


<style>
</style>