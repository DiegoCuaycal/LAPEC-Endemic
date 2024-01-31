<template>
    <div>
      <div class="flex justify-between p-5">
        <h3 class="text-2xl font-bold text-left py-2">Gestión de plantas</h3>
        <div>
        <router-link to="/editardetallesadmin"> 
          <button class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 ml-5 rounded-full">
           Gestión de imágenes, morfología y usos.
        </button>
      </router-link >
        <router-link to="/crearplantaadmin">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  ml-5 rounded-full">
        Nueva Planta
        </button>
      </router-link>
        </div>
    

      </div>
      <div class="mb-4">
    <input type="text" id="search"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500"  @keyup.enter="search" placeholder="Ingrese aquí nombre de la planta para buscar" v-model="busqueda" />
</div>
      <div class="overflow-x-auto relative  sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-green-700 text-gray-900">
            <tr>
              <th scope="col" class="py-3 px-6">
                ID
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Nombre Común
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Nombre Científico
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Acciones
               
                </div>
              </th>
   
            </tr>
          </thead>
          <tbody>
            <tr v-for="plant in plantas" :key="plant.idplanta" class="bg-white border-b text-gray-900 border-gray-400">
            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{{ plant.idplanta }}</td>
            <td class="py-4 px-6">{{ plant.nombrecomunplanta }}</td>
            <td class="py-4 px-6">{{ plant.nombrecientificoplanta }}</td>
            <td class="py-4 px-2 text-left">
              <button class="bg-green-200 hover:bg-green-500 text-black font-bold  px-2 rounded-full"  @click="editar(plant)">
            Editar
            </button>
            <button class="bg-red-200 hover:bg-red-500 text-black font-bold  px-2 rounded-full" @click="eliminar(plant.idplanta)">
            Eliminar
            </button>
            </td>
            </tr>

          </tbody>
        </table>
      </div>
  
    </div>
  </template>
  
  <script setup >
  import { ref ,onMounted } from 'vue';
  import { supabase } from '../lib/supabaseClient'
  import Router from '../router';

  let plantas = ref([])
  let busqueda=ref('')
  onMounted(()=>{
    getPlantas()
    busqueda.value=""
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
  async function editar(data) {
    localStorage.setItem("dataEditPlanta", JSON.stringify(data));
    Router.push('/editarplantaadmin');
  }

  async function eliminar(id) {
    if (confirm("¿Desea eliminar este registro?") == true) {
  try {
      const { error,status } = await supabase
      .from('plantas')
      .delete()
      .eq('idplanta',id)
      getPlantas()

  if (error && status !== 406) throw error
  } catch (error) {
    alert(error.message)
  }
}
  }

  async function getPlantasSearch(nombre) {
    try {
      const { data,error,status } = await supabase
      .from('plantas')
      .select('*')
      .order('idplanta', { ascending: true })
      .ilike('nombrecomunplanta',`%${nombre}%`)

  if (error && status !== 406) throw error
  if (data.length==0) {
    alert("No se encontró la planta ingresada")
    getPlantas()
    busqueda.value=''
    }else{
      plantas.value=data
    }
  } catch (error) {
    console.log(error.message)
  }
  }
  const search=(() =>{
    getPlantasSearch(busqueda.value)
  })


  </script>
  
  <style>
  
  </style>