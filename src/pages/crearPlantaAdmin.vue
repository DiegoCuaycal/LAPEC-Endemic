<template>
   <div class="flex justify-between p-5">
        <h3 class="text-2xl font-bold text-left py-2">Creación de plantas</h3>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"    @click="$router.go(-1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
        </button>
      </div>
    <div class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 class="text-2xl font-bold mb-6">Datos Generales</h2>
      <form @submit.prevent="submitForm">
  
        <div class="mb-4">
          <label for="name">Nombre común:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="nombrecomun" />
        </div>
        <div class="mb-4">
          <label for="name">Nombre científico:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="nombrecientifico" />
        </div>
        <div class="mb-4">
          <label for="name">Escoge taxonomía (Género Taxonómico):</label>
          <select v-model="taxonomia">
          <option v-for="(option,index) in listaTaxonomia" :key="index" :value="option.idtaxono">
            {{ option.generotaxono }}
          </option>
        </select>
        </div>
        <button type="submit" class="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Guardar</button>
      </form>

    </div>
    <div v-if="visualizarForms" class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 class="text-2xl font-bold mb-6">Ingresar datos de la imágen</h2>
      <form @submit.prevent="submitForm2">
  
        <div class="mb-4">
          <label for="name">Link de la imagen:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="urlImagen" />
        </div>
   
        <button type="submit" class="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Guardar</button>
      </form>

    </div>
    <div v-if="visualizarForms" class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 class="text-2xl font-bold mb-6">Ingresar datos de uso</h2>
      <form @submit.prevent="submitForm3">
        <div class="mb-4">
          <label for="name">Uso:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="usousF" />
        </div>
        <div class="mb-4">
          <label for="name">Parte utilizada:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="parteutilizadausF" />
        </div>
        <div class="mb-4">
          <label for="name">Descripción:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="descripcionusF" />
        </div>
        <button type="submit" class="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Guardar</button>
      </form>

    </div>
    <div v-if="visualizarForms" class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 class="text-2xl font-bold mb-6">Ingresar datos de morfologia</h2>
      <form @submit.prevent="submitForm4">
        <div class="mb-4">
          <label for="name">Forma de hoja:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="tipohojamorfoloF" />
        </div>
        <div class="mb-4">
          <label for="name">Color hoja :</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="colorhojamofoloF" />
        </div>
        <div class="mb-4">
          <label for="name">Tipo tallo:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="tipotallomorfoloF" />
        </div>
        <div class="mb-4">
          <label for="name">Color tallo:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="colortallomorfoloF" />
        </div>
        <div class="mb-4">
          <label for="name">Flor:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="flormorfoloF" />
        </div>
        <div class="mb-4">
          <label for="name">Color flor:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="colorflormorfoloF" />
        </div>
        <div class="mb-4">
          <label for="name">Forma hoja:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="formahojamorfoloF" />
        </div>
        <div class="mb-4">
          <label for="name">Textura hoja:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="texturahojamorfoloF" />
        </div>
        <div class="mb-4">
          <label for="name">Hábitat:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="habitatmorfoloF" />
        </div>
        <div class="mb-4">
          <label for="name">Semilla:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="semillamorfoloF" />
        </div>
        <button type="submit" class="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Guardar</button>
      </form>

    </div>
   
  </template>
  
  <script setup >
  import { ref,onMounted} from 'vue'
  import { supabase } from '../lib/supabaseClient'
  //Form1
  let dataUsuario=ref([]);
  let nombrecomun = ref('');
  let nombrecientifico=ref('')
  let taxonomia = ref('');
  let listaTaxonomia = ref('')
  let visualizarForms=ref(false)
  let idNuevaPlanta=ref([])
  //Form2
  let urlImagen=ref('')
  //Form3
  let usousF = ref('');
  let parteutilizadausF = ref('');
  let  descripcionusF = ref('');
  //Form4
  let tipohojamorfoloF = ref(' ');
  let colorhojamofoloF = ref(' ');
  let tipotallomorfoloF = ref(' ');
  let colortallomorfoloF = ref(' ');
  let flormorfoloF = ref(' ');
  let colorflormorfoloF = ref(' ');
  let formahojamorfoloF = ref(' ');
  let texturahojamorfoloF = ref(' ');
  let habitatmorfoloF = ref(' ');
  let semillamorfoloF = ref(' ');

  onMounted(() =>{
    dataUsuario.value=JSON.parse(localStorage.getItem("dataUsuario"))
    if(dataUsuario.value==null){
        console.log("No hay datos de usuario")
      }else{
        nombrecomun.value = ""
        nombrecientifico.value=""
        taxonomia.value=""
    }
    getTaxonomia() 
  })
      const submitForm=(() =>{
        newData()
      })
      const submitForm2=(() =>{
        newData2()
      })
      const submitForm3=(() =>{
        newData3()
      })
      const submitForm4=(() =>{
        newData4()
      })

      
      async function  newData(){
        try {
        const {data, error } = await supabase
        .from('plantas')
        .insert(
          {'nombrecomunplanta': nombrecomun.value,
          'nombrecientificoplanta':nombrecientifico.value, 
          'idtaxono': taxonomia.value,
          'idusuario':dataUsuario.value.idusuario
        })
        .select()
        if (error ) {
          console.log("Error en la creación")
        }else{
          alert("Planta creada correctamente, comletar la información en los siguientes formularios")
          visualizarForms.value=true
          idNuevaPlanta.value=data[0]
        }
        } catch (error) {
          console.log("Error en la creación",error)
        }
       
      }
   

      async function  newData2(){
        console.log(idNuevaPlanta.value)
        try {
        const { error } = await supabase
        .from('imagenes')
        .insert(
          {'idplanta': idNuevaPlanta.value.idplanta,
          'imagenurlima':urlImagen.value, 

        }
          )
        .select()

        if (error ) {
          console.log("Error en la creación")
        }else{
          alert("imagen ingresada correctamente")
        }
        
        } catch (error) {
          console.log("Error en la actualización")
        }
       
      }
      async function  newData3(){
        try {
        const { error } = await supabase
        .from('usos')
        .insert(
          {'usous':usousF.value,
          'parteutilizadaus':parteutilizadausF.value,
          'descripcionus':descripcionusF.value,
          'idplanta': idNuevaPlanta.value.idplanta,

        }
          )
        .select()

        if (error ) {
          console.log("Error en la creación")
        }else{
          alert("Uso creado correctamente")
        }
        } catch (error) {
          console.log("Error en la creación")
        }
       
      }
      async function  newData4(){
        try {
        const { error } = await supabase
        .from('morfologias')
        .insert(
          {'idplanta': idNuevaPlanta.value.idplanta,
            "tipohojamorfolo": tipohojamorfoloF.value,
            "colorhojamofolo": colorhojamofoloF.value,
            "tipotallomorfolo": tipotallomorfoloF.value,
            "colortallomorfolo": colortallomorfoloF.value,
            "flormorfolo": flormorfoloF.value,
            "colorflormorfolo": colorflormorfoloF.value,
            "formahojamorfolo": formahojamorfoloF.value,
            "texturahojamorfolo": texturahojamorfoloF.value,
            "habitatmorfolo": habitatmorfoloF.value,
            "semillamorfolo": semillamorfoloF.value
        }
          )
        .select()

        if (error ) {
          console.log("Error en la creación")
        }else{
          alert("Morfología creada correctamente")
          alert("Se han creado todos los campor de la planta")
          nombrecomun.value = ""
          nombrecientifico.value=""
          taxonomia.value=""
          urlImagen.value=""
          visualizarForms.value=false
          idNuevaPlanta.value=""
          usousF.value=""
          parteutilizadausF.value=""
          descripcionusF.value=""
          tipohojamorfoloF.value=""
          colorhojamofoloF.value=""
          tipotallomorfoloF.value=""
          colortallomorfoloF.value=""
          flormorfoloF.value=""
          colorflormorfoloF.value=""
          formahojamorfoloF=""
          texturahojamorfoloF=""
          habitatmorfoloF=""
          semillamorfoloF=""
        }
        } catch (error) {
          console.log("Error en la creación")
        }
       
      }

      async function getTaxonomia() {
      try {
      const { data,error,status } = await supabase
      .from('taxonomias')
      .select('*')
      .order('idtaxono', { ascending: true })

      if (error && status !== 406) throw error
      if (data) {
        listaTaxonomia.value=data
        }
      } catch (error) {
        alert(error.message)
  }
  }
        
      

    
  
  </script>
  
  <style >
  </style>