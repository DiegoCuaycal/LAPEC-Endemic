
<template>
      <div class="flex justify-between p-5">
        <h3 class="text-2xl font-bold text-left py-2">Descripción de plantas</h3>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"    @click="$router.go(-1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
        </button>
      </div>
     

    <div class="flex justify-center my-5 ">
      <div v-for="(planta) in fotoPlantaSeleccionada" :key="planta.imagenurlima" class="border border-green-100" >
        <img :src="`${ fotoPlantaSeleccionada.imagenurlima}`" alt="Imagen" class="w-full h-64 object-cover rounded rounded-lg shadow-lg">
      </div>
    
   

    </div>
    <div class="grid gap-2 grid-cols-1">
        <div class=" p-4 bg-green-100  border border-green-400  ">
        <h1 class="text-left text-lg font-bold mb-2">Nombre Común: {{ dataPlantaSeleccionada.nombrecomunplanta }}</h1>
        <h1 class="text-left text-lg font-bold mb-2">Nombre Científico: {{ dataPlantaSeleccionada.nombrecomunplanta }} </h1>
      </div>
        <div class="p-4 bg-green-100  border border-green-400 ">
        <h2 class=" text-left text-3xl font-bold mb-2">Usos</h2>
        <h1 class="text-left text-lg font-bold mb-2">Uso: {{ usosSeleccionada.usous }}</h1>
        <h1 class="text-left text-lg font-bold mb-2">Parte utilizada: {{ usosSeleccionada.parteutilizadaus }}</h1>
        <h1 class="text-left text-lg font-bold mb-2">Descripción de uso: {{ usosSeleccionada.descripcionus}}</h1>
      </div>
      <div class=" p-4 bg-green-100  border border-green-400 ">
        <h2 class=" text-left text-3xl font-bold mb-2">Taxonomía</h2>
        <h1 class="text-left text-lg font-bold mb-2">Reino: {{ taxonimiaSeleccionada.reinotaxono }}</h1>
        <h1 class="text-left text-lg font-bold mb-2">Filo: {{ taxonimiaSeleccionada.filotaxono }} </h1>
        <h1 class="text-left text-lg font-bold mb-2">Clase: {{ taxonimiaSeleccionada.clasetaxono }} </h1>
        <h1 class="text-left text-lg font-bold mb-2">Orden: {{ taxonimiaSeleccionada.ordentaxono}} </h1>
        <h1 class="text-left text-lg font-bold mb-2">Familia: {{ taxonimiaSeleccionada.familiataxono }} </h1>
        <h1 class="text-left text-lg font-bold mb-2">Género: {{ taxonimiaSeleccionada.generotaxono }}</h1>
        <h1 class="text-left text-lg font-bold mb-2">Especie: {{ taxonimiaSeleccionada.especietaxono}}</h1>
      </div>
      <div class=" p-4 bg-green-100  border border-green-400 ">
        <h2 class=" text-left text-3xl font-bold mb-2">Morfología</h2>
        <h1 class="text-left text-lg font-bold mb-2">Tipo de hoja: {{ morfologiaSeleccionada.tipohojamorfolo}}</h1>
        <h1 class="text-left text-lg font-bold mb-2">Color de  hoja: {{ morfologiaSeleccionada.colorhojamofolo }} </h1>
        <h1 class="text-left text-lg font-bold mb-2">Tipo de tallo: {{ morfologiaSeleccionada.tipotallomorfolo }} </h1>
        <h1 class="text-left text-lg font-bold mb-2">Color de tallo: {{ morfologiaSeleccionada.colortallomorfolo }} </h1>
        <h1 class="text-left text-lg font-bold mb-2">Flor: {{ morfologiaSeleccionada.flormorfolo }} </h1>
        <h1 class="text-left text-lg font-bold mb-2">Color flor: {{ morfologiaSeleccionada.colorflormorfolo }}</h1>
        <h1 class="text-left text-lg font-bold mb-2">Forma hoja: {{ morfologiaSeleccionada.formahojamorfolo }}</h1>
        <h1 class="text-left text-lg font-bold mb-2">Textura hoja: {{ morfologiaSeleccionada.texturahojamorfolo }}</h1>
        <h1 class="text-left text-lg font-bold mb-2">Hábitat: {{ morfologiaSeleccionada.habitatmorfolo }}</h1>
        <h1 class="text-left text-lg font-bold mb-2">Semilla: {{ morfologiaSeleccionada.semillamorfolo }}</h1>
      </div>
  
    </div>
  </template>


  
  <script setup >
  import { ref ,onMounted } from 'vue';
  import { supabase } from '../lib/supabaseClient'
  let dataPlantaSeleccionada=ref([])
  let fotoPlantaSeleccionada=ref([])
  let morfologiaSeleccionada=ref([])
  let usosSeleccionada=ref([])
  let taxonimiaSeleccionada=ref([])
  onMounted(() =>{
    dataPlantaSeleccionada.value=JSON.parse(localStorage.getItem("dataPlantaSeleccionada"))
    getPhoto()
    getMorfologia()
    getUsos()
    getTaxonomia()
   
  })
  async function getPhoto() {
      try {
      const { data,error,status } = await supabase
      .from('imagenes')
      .select('imagenurlima')
      .eq('idplanta',dataPlantaSeleccionada.value.idplanta)
      .single()

  if (error && status !== 406) throw error
  if (data) {
    fotoPlantaSeleccionada.value=data
    console.log("BG - getPhoto - fotoPlantaSeleccionada:", fotoPlantaSeleccionada.value)
    }
  } catch (error) {
    alert(error.message)
  }
  }
  async function getMorfologia() {
      try {
      const { data,error,status } = await supabase
      .from('morfologias')
      .select('*')
      .eq('idplanta',dataPlantaSeleccionada.value.idplanta)
      .single()

  if (error && status !== 406) throw error
  if (data) {
    morfologiaSeleccionada.value=data
    }
  } catch (error) {
    alert(error.message)
  }
  }
  async function getUsos() {
      try {
      const { data,error,status } = await supabase
      .from('usos')
      .select('*')
      .eq('idplanta',dataPlantaSeleccionada.value.idplanta)
      .single()

  if (error && status !== 406) throw error
  if (data) {
    usosSeleccionada.value=data
    }
  } catch (error) {
    alert(error.message)
  }
  }
  async function getTaxonomia() {
      try {
      const { data,error,status } = await supabase
      .from('taxonomias')
      .select('*')
      .eq('idtaxono',dataPlantaSeleccionada.value.idtaxono)
      .single()

  if (error && status !== 406) throw error
  if (data) {
    taxonimiaSeleccionada.value=data
    }
  } catch (error) {
    alert(error.message)
  }
  }
  
  

  </script>
  
  <style>
  
  </style>