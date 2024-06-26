<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { collectRandomNumbersCallAPI } from "../services/getRandomNumbers";
import { countNumberOfOccurences } from "../core/count-number-occurences"
import { computed, onBeforeMount, ref } from "vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
/****************************************************
 * 
 * 
 * Appel des fonctions
 * 
 * 
 ***************************************************/

    const randomNumbers = ref<number[]>([])
    const dataYAxisNombreOccurences = ref<number[]>([])

    onBeforeMount( async () => {
        randomNumbers.value = await collectRandomNumbersCallAPI()
        dataYAxisNombreOccurences.value = countNumberOfOccurences(randomNumbers.value)
        
        /****************** */
        //dataYAxisNombreOccurences.value.pop()
        
    })

/*************************************************** */

//Initialisation d'un tableau qui représente les données de l'axe des abscisses (chiffre 1-9)
const dataXAxisNumbers= ref<number[]>([])

for(let i=0 ; i<10 ; i++)
    dataXAxisNumbers.value[i] = i

console.log('dataXAxisNumbers', dataXAxisNumbers)

/*********************************************************
 * 
 * 
 * Définition de l'histogramme
 * 
 * 
 *********************************************************/
    // const data = ref()
    // data.value = {
    //   labels : dataXAxisNumbers,
    //   datasets : [{data : dataYAxisNombreOccurences}]
    // }
    
    // const options = ref()
    // options.value = {
    //   responsive: true
    // }

    /******************************** TEST **************************** */
    console.log('dataYAxisNombreOccurences.value', dataYAxisNombreOccurences.value)

    const data = computed(() => {
      return{
        //labels: [ 'January', 'February', 'March'],
         //labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
         labels : dataXAxisNumbers.value,
         datasets: [
           {
             label: 'Data One',
             backgroundColor: '#f87979',
              //data: [40, 20, 12]
             // data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
             data: dataYAxisNombreOccurences.value
           }
         ]
      }
    })
    
</script>

<template>
    <p>tototot</p>
    <p>{{ dataYAxisNombreOccurences }}</p>
    <!-- <Bar :data="data.value" :options="options.value" /> -->
    <Bar :data="data"/>
    
</template>