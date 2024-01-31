<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <div class="w-[400px] h-full text-black" v-show="showSide">
      <div class="pt-2 h-20 bg-white  flex justify-center content-start ">
        <img :src="require('@/assets/logoProyectoBaner.png')" alt="Imagen" class=" h-20  object-fill  ">
      </div>
      <div class="h-[calc(100vh-50px)] py-[20px]">
        <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
          <div class=" flex flex-col justify-between space-y-[10px]">
            <router-link to="/" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-green-400 hover:text-gray-800  transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" clip-rule="evenodd"></path>
              </svg>
              Home
            </router-link>
      
            <router-link to="/catalogo" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-green-400 hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              Catálogo de plantas
            </router-link>       

            <router-link to="/profile" v-if="estadoVisibleUsuario"  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-green-400 hover:text-gray-800  transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
              </svg>
              Usuario
            </router-link>

            <router-link to="/about" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-green-400  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path>
              </svg>
              Sobre nosotros
            </router-link>

            <h3 v-if="estadoVisibleAdmin" class=" pt-[20px] font-bold text-sm">Opciones de administrador</h3>

            <router-link to="/listaplantas" v-if="estadoVisibleAdmin" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-green-400  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg  class="mr-2 w-[25px] h-[25px] " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
              Administrador de plantas
            </router-link>

            <router-link to="/listaclientes" v-if="estadoVisibleAdmin" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-green-400  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg class="mr-2 w-[25px] h-[25px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Administrador de usuarios
            </router-link>

          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full">
      <div class="h-[50px] bg-white flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
        <!-- Hambuger menu -->
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>        </div>
        <!-- Search bar -->

        <div class="w-[calc(100%-30px)]  flex items-center">
          <div class="w-[calc(100%-200px)] text-gray-800 flex justify-center ">
            <div v-if="estadoVisibleUsuario" class="text-black text-center ">
                <h3 class="font-semibold">Bienvenido {{dataUsuario.nombreusuario}} </h3>
                <h3>{{dataUsuario.emailusuario}}</h3>
              </div>
          </div>
          <!-- User login -->
          <div class="w-[200px] ">
            <div class="flex items-center justify-end space-x-4 ">     
      
    
               <div class="font-semibold text-black text-left ">
                <router-link to="/login" v-if="!estadoVisibleUsuario" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-green-400 hover:text-gray-800  transition duration-400 ease-in-out">
                <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                </svg>
                Iniciar sesión
                </router-link>
                
              </div>
              <div class="font-semibold text-black text-center ">
                <router-link to="/login"  @click="cerrarsesion" v-if="estadoVisibleUsuario" class="   border-green-100 mx-5 p-2 inline-flex relative items-center w-full text-sm font-medium rounded-md  hover:bg-green-200 hover:text-gray-800  transition duration-400 ease-in-out">    
              
                  Cerrar sesión 
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3"/></svg>
                
                </router-link>
                
              </div>
            </div>
      
          </div>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-100 p-[20px]">
        <div class=" rounded-md p-[20px] h-full">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- Main  -->
  </div>
</template>
<script setup>
import { ref ,onMounted } from 'vue';
import { supabase } from '../../lib/supabaseClient'

let showSide = ref(true)
let estadoVisibleUsuario = ref(false)
let estadoVisibleAdmin = ref(false)
let idUsuario=ref('')
let dataUsuario=ref([])
  onMounted(() =>{
    estadoVisibleUsuario.value = localStorage.getItem("estadoVisibleUsuario") || "";
    estadoVisibleAdmin.value = localStorage.getItem("estadoVisibleAdmin") || "";
    idUsuario.value=localStorage.getItem("idUsuario")
    getDatosUsuario()
  })

  async function getDatosUsuario(){
    if (idUsuario.value) {
      console.log(idUsuario.value)
      try {
        const {  data,error,status } = await supabase
        .from('usuarios')
        .select('*')
        .eq('idusuario',idUsuario.value)
        .single()
        if (error && status !== 406) throw error
      if (data) {
          dataUsuario.value=data
          localStorage.setItem("dataUsuario", JSON.stringify(dataUsuario.value));
        }
    
      } catch (error) {
        console.log(error.message)
      }

    }else{
      console.log("Ingreso sin usuario")
    }
  }
   const toggleSideBar=(() =>{
      showSide = !this.showSide

    })
    const cerrarsesion=(() =>{
      localStorage.clear();
      estadoVisibleUsuario= false;
      estadoVisibleAdmin=false;
    })
   
</script>

<style>
.router-link-active {
  background-color: rgb(74 222 128);
}
</style>