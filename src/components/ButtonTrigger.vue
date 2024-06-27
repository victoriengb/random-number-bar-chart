<template>
    <div>
      <button>{{ buttonName }}</button>
    
      <EllipsisLoader :color="'black'" :text="text" class="loader" :toggle="toggle"/>
    </div>
</template>
  
<script setup lang="ts">
    import EllipsisLoader from './EllipsisLoader.vue'
  
    defineProps({
      text: {
        type: String,
        default: 'Loading',
      },
      buttonName: {
        type: String,
        default: 'Click me',
      },
      toggle: {
          type: Boolean,
          default: false,
      }
    })
  </script>