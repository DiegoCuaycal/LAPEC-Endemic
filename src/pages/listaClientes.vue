<template>
    <div>
      <div class="flex justify-between p-5">
        <h3 class="text-2xl font-bold text-left py-2">Gestión de usuarios</h3>
        <router-link to="/nuevoUsuario">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
        Nuevo Usuario
        </button>
        </router-link>
  

      </div>
      <div class="mb-4">
    <input type="text" id="search"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500"  @keyup.enter="search" placeholder="Ingrese aquí el nombre del usuario para buscar" v-model="busqueda" />
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
                  Correo 
              
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Nombre
               
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
            <tr v-for="user in users" :key="user.idusuario" class="bg-white border-b text-gray-900 border-gray-400">
            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{{ user.idusuario }}</td>
         
            <td class="py-4 px-6">{{ user.emailusuario }}</td>
            <td class="py-4 px-6">{{ user.nombreusuario }}</td>
            <td class="py-2 px-2 text-left">
              <button class="bg-green-200 hover:bg-green-500 text-black font-bold  px-2 rounded-full"  @click="editar(user)">
            Editar
            </button>
            <button class="bg-red-200 hover:bg-red-500 text-black font-bold  px-2 rounded-full" @click="eliminar(user.idusuario)">
            Eliminar
            </button>

            </td>
            </tr>

          </tbody>
        </table>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref ,onMounted } from 'vue';
  import { supabase } from '../lib/supabaseClient'
  import Router from '../router';
  let users = ref([])
  let busqueda = ref('')

  onMounted(()=>{
    getUsers()

  })

 
  async function editar(data) {
    console.log("BG - editar - data:", data)
    localStorage.setItem("dataEditUsuario", JSON.stringify(data));
    Router.push('/editarUsuarioAdmin');
  }


  async function eliminar(id) {
  console.log("BG - eliminar - id:", id)
  if (confirm("¿Desea eliminar este registro?") == true) {
    try {
      const { error,status } = await supabase
      .from('usuarios')
      .delete()
      .eq('idusuario',id)
      getUsers()

  if (error && status !== 406) throw error
  } catch (error) {
    alert(error.message)
  }
  }
 
  }
  async function getUsers() {
      try {
      const { data,error,status } = await supabase
      .from('usuarios')
      .select('*')
      .order('idusuario', { ascending: true })

  if (error && status !== 406) throw error
  if (data) {
    users.value=data
    console.log("BG - getUsers - users:", users)
    }
  } catch (error) {
    alert(error.message)
  }
  }

  async function getClientesSearch(nombre) {
    try {
      const { data,error,status } = await supabase
      .from('usuarios')
      .select('*')
      .ilike('nombreusuario',`%${nombre}%`)
      if (error && status !== 406) throw error
      if (data.length==0) {
    alert("No se encontró el usuario ingresado")
    getUsers()
    busqueda.value=''
    }else{
      users.value=data
    }
  } catch (error) {
    console.log(error.message)
  }
  }
  const search=(() =>{
    getClientesSearch(busqueda.value)
  })

  </script>
  
  <style>
  
  </style>