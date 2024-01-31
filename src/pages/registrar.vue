<template>
    <div class="max-w-md mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
      <h2 class="text-2xl font-bold mb-6">Registrar</h2>
      <h2 class="text-2xl font-bold mb-6">Ingresa tus datos para crear una nueva cuenta</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-sm font-semibold text-gray-600">Nombres:</label>
          <input v-model="name" type="text" id="name" class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" required />
        </div>
        <div class="mb-4">
          <label for="correo" class="block text-sm font-semibold text-gray-600">Correo:</label>
          <input v-model="correo" type="text" id="correo" class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" required />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-semibold text-gray-600">Password:</label>
          <input v-model="password" type="password" id="password" class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" required />
        </div>
        <button type="submit" class="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Crear cuenta</button>
      </form>
  
    </div>
  </template>
  
  <script setup >
  import { ref } from 'vue'
  import { supabase } from '../lib/supabaseClient'
  import Router from '../router';
  let name = ref('');
  let correo=ref('')
  let password = ref('');
  let rol=ref('')

      const submitForm=(() =>{
        newData()
      })
      
      async function  newData(){
        rol.value=2
        try {
        const { error } = await supabase
        .from('usuarios')
        .insert(
          {'nombreusuario': name.value,
          'emailusuario':correo.value, 
          'contrasenausuario': password.value,
          'idrol':rol.value
        }
          )
        .select()

        if (error ) {
          alert("Error en la creación")
        }else{
          alert("Usuario creado correctamente")
          name.value =""
          correo.value=""
          password.value=""
          rol.value=""
          Router.push('/login');
        }
        
        } catch (error) {
          alert("Error en la creación")
        }
       
      }
        
      

    
  
  </script>
  
