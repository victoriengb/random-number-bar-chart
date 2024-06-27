<template>

    <div>
      <button>{{ buttonName }}</button>
    
      <EllipsisLoader :color="'black'" :text="text" class="loader" :toggle="toggle"/>
    </div>
</template>
  
<script setup>
    import EllipsisLoader from './EllipsisLoader.vue'
  
    const props = defineProps({
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