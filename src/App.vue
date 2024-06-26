<script setup lang="ts">
// import { collectRandomNumbersCallAPI } from "./services/getRandomNumbers";
// import { countNumberOfOccurences } from "./core/count-number-occurences"
// import { onMounted, ref } from "vue";

import BarChart from "./components/BarChart.vue"

/*************************************************** */

//Initialisation d'un tableau qui représente les données de l'axe des abscisses (chiffre 1-9)
// const dataXAxisNumbers= ref<number[]>([])
// for(let i=0 ; i<10 ; i++)
//   dataXAxisNumbers.value[i] = i

// console.log('dataXAxisNumbers', dataXAxisNumbers)

/****************************************************
 * 
 * 
 * Appel des fonctions
 * 
 * 
 ***************************************************/

// const randomNumbers = ref<number[]>([])
// const dataYAxisNombreOccurences = ref()

// onMounted( async () => {
//   randomNumbers.value = await collectRandomNumbersCallAPI()
//   dataYAxisNombreOccurences.value = countNumberOfOccurences(randomNumbers.value)
// })


</script>

<template>
    <div>
      <h1>SSZZSSZ</h1>
      <!-- <p>{{ dataYAxisNombreOccurences }}</p>
      <p>{{ dataXAxisNumbers }}</p> -->

      <BarChart />
    </div>
</template>

<style>

</style>