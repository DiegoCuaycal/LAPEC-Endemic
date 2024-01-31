<template>
        <div class="flex justify-between p-5">
        <h3 class="text-2xl font-bold text-left py-2">Edición de usuarios</h3>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"    @click="$router.go(-1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
        </button>
      </div>
     
    <div class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 class="text-2xl font-bold mb-6">Actualizar información</h2>
      <form @submit.prevent="submitForm">
  
        <div class="mb-4">
          <label for="name">Actualizar nombre:</label>
          <input type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="name" />
        </div>
        
        <div class="mb-4">
          <label for="correo">Actualizar correo:</label>
          <input type="text" id="correo" class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="correo" />
        </div>
  
        <div class="mb-4">
          <label for="password">Actualizar contraseña:</label>
          <input type="password" id="password" class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="password" />
        </div >
        
        <button type="submit" class="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Guardar cambios</button>
      </form>
    </div>
  </template>
  
  <script setup >
  import { ref,onMounted } from 'vue'
  import { supabase } from '../lib/supabaseClient'
  import Router from '../router';
  let dataUsuario=ref([])
  let name = ref('');
  let correo=ref('')
  let password = ref('');
  onMounted(() =>{
      dataUsuario.value=JSON.parse(localStorage.getItem("dataUsuario"))
  
      if(dataUsuario.value==null){
        console.log("No hay datos de usuario")
      }else{
        name.value=dataUsuario.value.nombreusuario
        correo.value=dataUsuario.value.emailusuario
        password.value = dataUsuario.value.contrasenausuario
      }

 
  })

      const submitForm=(() =>{
        console.log('Nombre:', name.value);
        console.log('Contraseña:', password.value);
        console.log('Correo:', correo.value);
        editData()
      })
      
      async function  editData(){
        try {
        const { error } = await supabase
        .from('usuarios')
        .update(
          {'nombreusuario': name.value,'emailusuario':correo.value, 'contrasenausuario': password.value}
          )
        .eq('idusuario',dataUsuario.value.idusuario )
        .select()

        if (error ) {
          alert("Error en la actualización")
        }else{
          alert("Datos Actualizados correctamente")
          Router.push('/profile');
        }
        
        } catch (error) {
          alert("Error en la actualización")
        }
       
      }
        
      

    
  
  </script>
  
  <style >
  </style>