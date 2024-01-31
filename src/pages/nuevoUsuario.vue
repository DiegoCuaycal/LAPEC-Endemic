<template>
      <div class="flex justify-between p-5">
        <h3 class="text-2xl font-bold text-left py-2">Creación de usuario</h3>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"    @click="$router.go(-1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
        </button>
      </div>
    <div class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 class="text-2xl font-bold mb-6">Nuevo usuario</h2>
      <form @submit.prevent="submitForm">
  
        <div class="mb-4">
          <label for="name">Nombre:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="name" />
        </div>
        
        <div class="mb-4">
          <label for="correo">Correo:</label>
          <input required type="text" id="correo" class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="correo" />
        </div>
        <label for="rol">Seleccionar un rol:</label>
        <div class="my-4 flex justify-around">
            <input required type="radio" id="one" value="1" v-model="rol" />
            <label for="one">Administrador</label>

            <input required type="radio" id="two" value="2" v-model="rol" />
            <label for="two">Usuario normal</label>
        </div>
        <div class="mb-4">
          <label for="password">Contraseña</label>
          <input required type="text" id="password" class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="password" />
        </div >
        
        <button type="submit" class="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Guardar cambios</button>
      </form>
    </div>
  </template>
  
  <script setup >
  import { ref } from 'vue'
  import { supabase } from '../lib/supabaseClient'
  let name = ref('');
  let correo=ref('')
  let password = ref('');
  let rol=ref('')

      const submitForm=(() =>{
        console.log('Nombre:', name.value);
        console.log('Contraseña:', password.value);
        console.log('Correo:', correo.value);
        console.log('Rol:', rol.value);
        newData()
      })
      
      async function  newData(){
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
        }
        
        } catch (error) {
          alert("Error en la creación")
        }
       
      }
        
      

    
  
  </script>
  
  <style >
  </style>