
<template>
<div class="mb-4">
    <input type="text" id="search"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500"  @keyup.enter="search" placeholder="Ingrese aquí el nombre de la planta para buscar" v-model="busqueda" />
</div>
<div class="container mx-auto mt-8 grid grid-cols-2 gap-10">
  <div class="container   grid grid-cols-1 gap-8">
      <div v-for="(imagen, index) in imagenes" :key="index" class="border border-green-100 ">
          <img :src="`${ imagen.imagenurlima}`" alt="Imagen de la planta" class="w-full h-64 object-cover rounded"  >
      </div>


  </div>
  <div class="container  grid grid-cols-1 gap-8">
      <div v-for="(planta, index) in plantas" :key="index" >
          <div class="grid gap-2 grid-cols-1 border border-green-400 bg-green-100  content-center justify-center  text-black w-full h-64 object-cover rounded p-5 ">
            <h1 class="text-xl  font-bold">Nombre común: {{ planta.nombrecomunplanta}}</h1>
            <h1 class="text-xl font-bold">Nombre científico: {{ planta.nombrecientificoplanta}}</h1>
            <h1 class="bg-green-500  py-5 border border-green-700 text-base font-bold"  @click="seleccionar(planta)">Más información aqui </h1>
          </div>
    </div>
    

  </div>

</div>



  </template>
  <script setup>
  import { ref ,onMounted } from 'vue';
  import { supabase } from '../lib/supabaseClient'
  import Router from '../router';

  let plantas = ref([])
  let imagenes = ref([])
  let plantaSeleccionada = ref(null)
  let busqueda= ref('')
  
  onMounted(()=>{
    getPlantas()
    getImagenes() 
    busqueda.value=''
  })
  
  async function getPlantas() {
      try {
      const { data,error,status } = await supabase
      .from('plantas')
      .select('*')
      .order('idplanta', { ascending: true })

  if (error && status !== 406) throw error
  if (data) {
    plantas.value=data
    }
  } catch (error) {
    alert(error.message)
  }
  }
  async function getImagenes() {
      try {
      const { data,error,status } = await supabase
      .from('imagenes')
      .select('*')
      .order('idplanta', { ascending: true })

  if (error && status !== 406) throw error
  if (data) {
    imagenes.value=data
    }
  } catch (error) {
    alert(error.message)
  }
  }
  async function getImagenesSearch() {
      try {
      const { data,error,status } = await supabase
      .from('imagenes')
      .select('*')
      .order('idplanta', { ascending: true })
      .eq('idplanta',plantas.value[0].idplanta)

  if (error && status !== 406) throw error
  if (data.length==0) {

    alert("No se encontró imagen de la planta ingresada")
    }else{
      imagenes.value=data
    }
  } catch (error) {
    alert(error.message)
  }
  }
  async function getPlantasSearch(nombre) {
    try {
      
      const { data,error} = await supabase
      .from('plantas')
      .select('*')
      .ilike('nombrecomunplanta',`%${nombre}%`)


  if (error ) throw error
  if (data.length==0) {
    alert("No se encontró la planta ingresada")
    getPlantas()
    getImagenes() 
    }else{
      plantas.value=data
      getImagenesSearch()
    }
  } catch (error) {
    console.log(error.message)
  }
  }
  const search=(() =>{
    getPlantasSearch(busqueda.value)
  })
  const seleccionar=((planta) =>{
    plantaSeleccionada.value= planta;
    localStorage.setItem("dataPlantaSeleccionada", JSON.stringify(plantaSeleccionada.value));
    Router.push('/descripcion');
  })
  


  </script>
  
  <style >
  </style>
  

