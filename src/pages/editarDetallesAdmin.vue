<template>
     <div class="flex justify-start p-5 ">
        <h3 class="text-2xl font-bold text-left py-2 ">Visualización de detalles de las plantas </h3>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-28" @click="$router.go(-1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
        </button>
      </div>
     <div class="flex justify-between p-5">
        <h3 class="text-2xl font-bold text-left py-2">Tabla de imágenes de las plantas</h3>
     </div>
     <div class=" sm:rounded-lg">
        <table class=" w-5/6 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-green-700 text-gray-900">
            <tr>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Id imagen
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Id de la planta
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Url de la imagen
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Imágen
                </div>
              </th>
   
            </tr>
          </thead>
          <tbody>
            <tr v-for="(imagen,index) in dataImagenes" :key="index" class="bg-white border-b text-gray-900 border-gray-400">
            <td class="p-2 font-medium text-gray-900 whitespace-nowrap">{{ imagen.idima }}</td>
            <td class="p-2">{{ imagen.idplanta }}</td>
            <td class="p-2">{{ imagen.imagenurlima }}</td>
            <td class="p-2">
                <img :src="`${ imagen.imagenurlima}`" alt="Imagen de la planta" class="w-24 h-24 object-cover rounded"  >
            </td>

            </tr>

          </tbody>
        </table>
      </div>
      <div class="flex justify-between p-5">
        <h3 class="text-2xl font-bold text-left py-2">Tabla de usos de las plantas</h3>
     </div>
      <div class="  sm:rounded-lg">
        <table class="w-5/6  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-green-700 text-gray-900">
            <tr>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Id uso
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Id Planta
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Uso
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Parte utilizada
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Descripción uso
                </div>
              </th>
   
            </tr>
          </thead>
          <tbody>
            <tr v-for="(uso,index) in dataUsos" :key="index" class="bg-white border-b text-gray-900 border-gray-400">
            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{{ uso.idus }}</td>
            <td class="py-4 px-6">{{ uso.idplanta }}</td>
            <td class="py-4 px-6">{{ uso.usous }}</td>
            <td class="py-4 px-6">{{ uso.parteutilizadaus }}</td>
            <td class="py-4 px-6">{{ uso.descripcionus }}</td>
            </tr>

          </tbody>
        </table>
      </div>
      <div class="flex justify-between p-5">
        <h3 class="text-2xl font-bold text-left py-2">Tabla de morfología de las plantas</h3>
     </div>
      <div class="sm:rounded-lg">
        <table class="w-5/6  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-green-700 text-gray-900">
            <tr>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                Id morfología
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                Id planta
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Tipo de Hoja
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Color de Hoja
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Tipo de Tallo
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Color de Tallo
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Flor
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Color Flor
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Forma Hoja
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Textura Hoja
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Hábitat 
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Semilla
              
                </div>
              </th>        
   
            </tr>
          </thead>
          <tbody>
            <tr v-for="(morfo,index) in dataMorfologia" :key="index" class="bg-white border-b text-gray-900 border-gray-400">
            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{{ morfo.idmorfolo }}</td>
            <td class="py-4 px-6">{{ morfo.idplanta }}</td>
            <td class="py-4 px-6">{{ morfo.tipohojamorfolo }}</td>
            <td class="py-4 px-6">{{ morfo.colorhojamofolo }}</td>
            <td class="py-4 px-6">{{ morfo.tipotallomorfolo }}</td>
            <td class="py-4 px-6">{{ morfo.colortallomorfolo }}</td>
            <td class="py-4 px-6">{{ morfo.flormorfolo }}</td>
            <td class="py-4 px-6">{{ morfo.colorflormorfolo }}</td>
            <td class="py-4 px-6">{{ morfo.formahojamorfolo}}</td>
            <td class="py-4 px-6">{{ morfo.texturahojamorfolo }}</td>
            <td class="py-4 px-6">{{ morfo.habitatmorfolo}}</td>
            <td class="py-4 px-6">{{ morfo.semillamorfolo }}</td>
  
            </tr>

          </tbody>
        </table>
      </div>

   
  </template>
  
  <script setup >
  import { ref,onMounted} from 'vue'
  import { supabase } from '../lib/supabaseClient'
  let dataUsos=ref([])
  let dataMorfologia=ref([])
  let dataImagenes=ref([])


  onMounted(() =>{

    getUsos()
    getImagenes()
    getMorfologias()
  })


      async function getUsos() {
      try {
      const { data,error,status } = await supabase
      .from('usos')
      .select('*')
      .order('idplanta', { ascending: true })

      if (error && status !== 406) throw error
      if (data) {
        dataUsos.value=data
        }
      } catch (error) {
        alert(error.message)
      }
      }
        
      async function getMorfologias() {
      try {
      const { data,error,status } = await supabase
      .from('morfologias')
      .select('*')
      .order('idplanta', { ascending: true })

      if (error && status !== 406) throw error
      if (data) {
        dataMorfologia.value=data
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
        dataImagenes.value=data
        }
      } catch (error) {
        alert(error.message)
      }
      }

    
  
  </script>
  
  <style >
  </style>