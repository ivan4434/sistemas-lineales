<template>
  <LoadingScreen v-if="loading" class="absolute"/>
  <div v-if="init" class="flex flex-col items-center mt-5" >
    <span class="mb-5">Introduce las dimensiones de la matriz ampliada</span>
    <input v-model="filas" type="number" placeholder="filas"> x <input v-model="columnas" type="number" placeholder="columnas">
    <button class="mt-5" @click="Iniciar(filas, columnas)">Aceptar</button>
  </div>

  <div v-if="!init" class="flex flex-col items-center mt-5">
    <div v-for="(fila, index) in matriz" :key="index" class="flex flex-row items-center">
      ( <div v-for="(col, index2) in fila" :key="index2"><span v-if="index2 == fila.length-1">|</span><input class="w-[4rem] border-0 m-2" type="number" v-model="matriz[index][index2]"></div> )
    </div>

    <div class="flex flex-row mt-5"><button class="m-2" @click="Calc.Diag(matriz)">Diagonalizar</button> <button @click="Calc.Sol(matriz)" class="m-2">Resolver</button> <button @click="Reset" class="m-2">Resetear</button></div>
    <div class="flex flex-row" v-if="isFinite(sol[0])"><div class="ml-2" v-for="(s, index) in sol" :key="index">X{{index+1}} = {{s}}</div></div>
    <div v-else-if="sol[0] !=null">El sistema no tiene solución o tiene infinitas soluciones</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import LoadingScreen from './components/LoadingScreen.vue'

function createMatriz(size){
  var matriz = new Array(size);
  for (var i = 0; i < size ; i++){ 
    matriz[i]=new Array(size); 
  } 
  return matriz;
}


export default {
  name: 'App',
  components: {
    LoadingScreen
  },
  setup:()=>{
    const loading = ref(false);
    const init = ref(true);
    const matriz = ref([]);
    const sol = ref([]);

    const Iniciar = (filas, columnas)=>{
      matriz.value = [];
      if (filas > 0 & columnas > 1){
        init.value = false
        for(var i = 0; i < filas; i++){
          matriz.value.push([]);
          for(var x = 0; x < columnas; x++){
            matriz.value[i].push(0);
          }
        }
      }
    }

    const Calc = ref({
      Diag:(m)=>{
        for (var ciclo = 0; ciclo < m.length-1; ciclo++){
          for (var fila = m.length; fila > 0; fila--){
            if(fila-1 != ciclo && fila-1 > ciclo){
              let division = (0 - m[fila-1][ciclo]) / m[ciclo][ciclo];

              if (!isFinite(division)) {
                division = 0;
              }

              for (var col = 0; col <= m[0].length-1; col++){
                let suma = m[ciclo][col] * division;
                m[fila-1][col] = m[fila-1][col] + suma;
              }
            }
          }
        }
        matriz.value = m
      },

      Sol: (m)=>{
        sol.value = [];
        let det = Calc.value.Det(m);
        for (var i = 0; i < m[0].length - 1; i++){
          let solution = [];
          m.forEach((fila, index)=>{
            solution.push([]);
            fila.forEach((col, ind)=>{
              if (ind == i){
                solution[index].push(fila[fila.length-1]);
              }else{
                solution[index].push(col)
              }
            })
          });
          if(Calc.value.Det(solution)/det == "-0"){
            sol.value.push(0);
          }else{
            sol.value.push(Calc.value.Det(solution)/det);
          }
        }
        
        console.log(sol.value)
      },

      Det: (m)=>{
        if(m.length <= 2){
          let detCof = (m[0][0]*m[1][1]-m[1][0]*m[0][1])
          return detCof;
        }else{
          let matriz2 = [];
          m.forEach((fila, index)=>{
            matriz2.push([]);
            fila.forEach((col, ind)=>{
              if (ind != fila.length - 1){
                matriz2[index].push(col)
              }
            })
          });

          let suma = 0;

          for(var i = 0; i<matriz2.length; i++){
            var nm = createMatriz(matriz2.length-1);
            for(var j=0; j<matriz2.length; j++){
              if(j!=i){
                for(var k=1; k<matriz2.length; k++){
                  var indice=-1;
                  if(j<i)
                    indice=j;
                  else if(j>i)
                    indice=j-1;
                  nm[indice][k-1] = matriz2[j][k];
                }
              }
            }
            if(i%2==0){                            
              suma = suma + (matriz2[i][0] * (nm[0][0]*nm[1][1]-nm[1][0]*nm[0][1]));                            
            }                            
            else{                            
              suma = suma - (matriz2[i][0] * (nm[0][0]*nm[1][1]-nm[1][0]*nm[0][1]));
            }                        
          }
          return suma;
        }
      }
    });

    const Reset = ()=>{
      init.value = true;
      matriz.value = [];
      sol.value = [];
    }

    return { loading, init, matriz, Iniciar, Calc, sol, Reset }
  }
}
</script>

<style>
  input{
    border:solid .5px black;
    padding: 2px;
  }
  button{
    transition: 200ms;
    color:white;
    background-color: black;
    padding: 5px;
    border-radius: 6px;
  }
  button:hover{
    transform: scale(95%);
  }
  button:active{
    color:rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
  }
</style>
