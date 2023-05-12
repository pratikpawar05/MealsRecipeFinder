<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Name</h1>
    </div>
    <div class="px-8 pb-3">
        <input
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
        id="meals" type="text" placeholder="Search for any meals!"
        v-model="keyword"
        @change="searchMeals">
    </div>
    <Meals :meals="meals" />

</template>
<script setup>
import {ref} from 'vue';
import store from '../store';
import { computed } from '@vue/reactivity';
import Meals from '../components/Meals.vue'
const keyword=ref('');

//Get meals
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    if(keyword.value==""){
        store.commit("setSearchedMeals");
    }
    else store.dispatch('searchMeals',keyword.value);
}
</script>

<style>
</style>