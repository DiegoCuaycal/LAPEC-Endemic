
<template>
  <div class="flex flex-row  justify-start  content-start">
    <div class="basis-1/4 p-5">
      <img :src="require('@/assets/perfil.png')" alt="Imagen" class="w-full rounded-lg shadow-lg">
    </div>
    <div class="basis-1/2 p-10">
      <h1  class="text-left  text-2xl font-bold">Detalles de perfil</h1>
      <h1 class="text-left  text-xl font-bold">Nombre: {{ dataUsuario.nombreusuario}} </h1>
      <h1 class="text-left  text-xl font-bold mb-5">Correo: {{ dataUsuario.emailusuario}}</h1>
      
      <router-link to="/edicionperfil">
      <h1 class="border-2 rounded-full  border-gray-500 hover:bg-green-400  hover:text-gray-800 transition duration-400 ease-in-out m-2 p-2 text-center  text-xl font-bold ">Actualizar información </h1>
      </router-link>

      

    </div>

  </div>

</template>



<script setup>
import { ref ,onMounted } from 'vue';
let dataUsuario=ref([])
  onMounted(() =>{
      dataUsuario.value=JSON.parse(localStorage.getItem("dataUsuario"))
      console.log(dataUsuario)
 
  })


</script>

<style>

</style>