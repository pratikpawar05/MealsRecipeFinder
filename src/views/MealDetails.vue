<template>
        <div class="max-w-[800px] mx-auto p-8">
            <div class="grid grid-cols-1">
                 <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
                 <img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-xl w-full object-cover">
                <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
                    <div>
                        <strong>Category: </strong> {{ meal.strCategory }}
                    </div>
                    <div>
                        <strong>Area:</strong> {{ meal.strArea }}
                    </div>
                    <div>
                        <strong>Tags:</strong> {{ meal.strTags }}
                    </div>
                </div>
                <p>
                    {{ meal.strInstructions }}
                </p>
                <div class="flex flex-wrap content-evenly	">
                    <ol type="1"  class="basis-1/2 flex flex-col">
                        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                        <li v-for="idx in 20" :key="idx"><h4 v-if="meal[`strIngredient`+idx]">{{ idx+". "+ meal["strIngredient"+idx] }}</h4></li>
                    </ol>
                    <ol type="1" class="basis-1/2 flex flex-col ">
                        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                        <li v-for="idx in 20" :key="idx" ><h4 v-if="meal[`strMeasure`+idx]">{{idx+". "+ meal["strMeasure"+idx] }}</h4></li>
                        <!-- v-if="meal[`strMeasure`+idx]" -->
                    </ol>
                </div>
            </div>
            <div class="mt-4">
                <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors">Youtube</a>
                <a
                :href="meal.strSource"
                target="_blank"
                class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
                >
                View Original Source
                </a>
            </div>

        </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import { useRoute } from 'vue-router';

const route = useRoute();
const meal = ref({});

//Get meals
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {}
    })
})

// const meal = store.state.searchedMeals.find((meal)=> meal.idMeal==id);
// console.log( meal );
</script>

<style>
</style>