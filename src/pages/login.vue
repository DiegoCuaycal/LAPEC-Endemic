<template>
    <div class="max-w-md mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
      <h2 class="text-2xl font-bold mb-6">Login</h2>
      <form @submit.prevent="getCredenciales">
        <div class="mb-4">
          <label for="email" class="block text-sm font-semibold text-gray-600">Correo:</label>
          <input v-model="email" type="text" id="email" class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" required />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-semibold text-gray-600">Password:</label>
          <input v-model="password" type="password" id="password" class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" required />
        </div>
        <button type="submit" class="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" >Login</button>
      </form>
      <div class="mb-6 py-5">
          <router-link to="/registrar" class="block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
              Registrarse
            </router-link>
        </div>
    </div>
  </template>
  
  
<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import Router from '../router';
const email = ref('');
const password =ref('');
const pwdBdd = ref('');
const rol = ref('');
const idBdd=ref('');
const estadoVisibleUsuario= ref(false);
const estadoVisibleAdmin= ref(false);


async function getCredenciales() {
  try {
  const {  data,error,status } = await supabase
  .from('usuarios')
  .select(`idusuario,contrasenausuario, idrol`)
  .eq('emailusuario',email.value)
  .single()

  if (error   || status == 406) {
    alert("Usuario o contraseña incorrecta")
  }

  if (data) {
      idBdd.value=data.idusuario;
      pwdBdd.value = data.contrasenausuario;
      rol.value=data.idrol;
      console.log(email.value)
      console.log(password.value)
      console.log(pwdBdd.value)
      console.log(rol.value)
      console.log(idBdd.value)
      if (password.value==pwdBdd.value) {
        console.log('Ingreso correcto');
        if (rol.value=="1") {
          console.log('Es admin');
          estadoVisibleUsuario.value=true
          estadoVisibleAdmin.value=true
          localStorage.setItem("estadoVisibleUsuario", estadoVisibleUsuario.value);
          localStorage.setItem("estadoVisibleAdmin", estadoVisibleAdmin.value);
        } else {
          console.log('Es usuario');
          estadoVisibleUsuario.value=true
          localStorage.setItem("estadoVisibleUsuario", estadoVisibleUsuario.value);
      
        }
        localStorage.setItem("idUsuario", idBdd.value);
        Router.push('/');
      }else{
        alert("Usuario o contraseña incorrecta")
      }
    }
  } catch (error) {
    alert(error.message)
  }
  }




  </script >
  