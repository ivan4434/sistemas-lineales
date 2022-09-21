<template>
  <div class="text-white text-2xl font-bold flex flex-col items-center bg-[rgba(0,0,0,.8)] w-screen h-screen">
    <div class="absolute top-[50%] translate-y-[-50%]">{{text}}</div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LoadingScreen',
  props: {
    
  },
  setup:()=>{
    const text = ref("Cargando...")
    let currentState = 0;
    let states = ["Cargando.","Cargando..","Cargando..."]
    setInterval(()=>{
      if (currentState >= states.length){
        currentState = 0;
      }

      text.value = states[currentState]
      currentState++;
    }, 500)
    return { text }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
