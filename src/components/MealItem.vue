<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal }}">
            <img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-xl w-full h-48 object-cover">
        </RouterLink>
        <div class="p-3">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <h4  v-if="meal.strInstructions" >{{ meal.strInstructions.substring(1, 70) }}</h4>
          <div class="flex items-center justify-between">
            <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors">Youtube</a>
          </div>
        </div>
    </div>
</template>
<script setup>

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
});

</script>
<style>
</style>