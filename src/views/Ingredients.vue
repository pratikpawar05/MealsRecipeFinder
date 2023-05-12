<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
    </div>
    <div class="px-8 pb-3">
        <div class="pb-3">
            <input
            class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
            id="meals" type="text" placeholder="Search for ingredients!"
            v-model="keyword">
        </div>
        <div>
            <div class="grid grid-cols-3 gap-10">
                <div v-for="ingredient of computedIngredients" :key="ingredient.idIngredient" class="bg-white shadow  hover:scale-105 transition-all p-4">
                    <RouterLink class="text-2xl font-bold mb-2" :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient }}">
                        <h1 >{{ ingredient.strIngredient }}</h1>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import store from '../store';
import {computed} from '@vue/reactivity';
import {onMounted,ref} from 'vue';
import axiosClient from '../axiosClient';

const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});


onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});

// function getIngredients() {
//     store.dispatch('getIngredients');
// }
// getIngredients();

</script>

<style>
</style>