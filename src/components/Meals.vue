<template>
  <div class="grid grid-cols-3 gap-10 px-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl hover:scale-105 transition-all" :meal="meal">
        </MealItem>
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
    There are no meals
  </div>
</template>
<script setup>
import MealItem from './MealItem.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  }
});
</script>
<style>
</style>