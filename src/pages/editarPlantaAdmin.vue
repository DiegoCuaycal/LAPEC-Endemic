<template>
     <div class="flex justify-between p-5">
        <h3 class="text-2xl font-bold text-left py-2">Edición de plantas</h3>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"    @click="$router.go(-1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
        </button>
      </div>
    <div class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 class="text-2xl font-bold mb-6">Editar detalles generales de la planta</h2>
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
              <button type="submit" class="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Guardar cambios</button>
            </form>

        <form @submit.prevent="submitForm2">
        
        <div class="mb-4 mt-5">
          <label for="name">Editar URL de la imagen:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="urlImagen" />
        </div>
        <button type="submit" class="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Guardar nueva imagen</button>
      </form>
      
      <div  class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 class="text-2xl font-bold mb-6">Editar datos de uso de la planta</h2>
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
      
    <div  class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 class="text-2xl font-bold mb-6">Editar datos de la morfología de la planta</h2>
      <form @submit.prevent="submitForm4">
        <div class="mb-4">
          <label for="name">Forma de hoja:</label>
          <input required type="text" id="name"  class="w-full px-4 py-2 mt-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500" v-model="tipohojamorfoloF" />
        </div>
        <div class="mb-4">
          <label for="name">Color hoja:</label>
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



    </div>

    
   
  </template>
  
  <script setup >
  import { ref,onMounted} from 'vue'
  import { supabase } from '../lib/supabaseClient'
  let listaTaxonomia=ref([])
  let dataEdit=ref([]);
  let nombrecomun = ref('');
  let nombrecientifico=ref('')
  let taxonomia = ref('');
  let dataUsos=ref([])
  let dataMorfologia=ref([])
  let dataImagenes=ref([])
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
    dataEdit.value = JSON.parse(localStorage.getItem("dataEditPlanta"))
    if(dataEdit.value==null){
        console.log("No hay datos de usuario")
      }else{
        nombrecomun.value =dataEdit.value.nombrecomunplanta
        nombrecientifico.value=dataEdit.value.nombrecientificoplanta
        taxonomia.value=dataEdit.value.idtaxono
        getTaxonomia() 
        getUsos()
        getMorfologias()
        getImagenes()
    }
  })

      
      const submitForm=(() =>{
        newData()
       
      })
      const submitForm2=(() =>{
        newDataImagen()
       
      })
      const submitForm3=(() =>{
        newData3()
       
      })
      const submitForm4=(() =>{
        newData4()
       
      })

      
      
      async function  newData(){
        try {
        const { error } = await supabase
        .from('plantas')
        .update(
          {'nombrecomunplanta': nombrecomun.value,
          'nombrecientificoplanta':nombrecientifico.value, 
          'idtaxono': taxonomia.value,
        }
          )
        .eq('idplanta',dataEdit.value.idplanta)
        .select()

        if (error ) {
          alert("Error en la actualización")
        }else{
          alert("Usuario actualizado correctamente")

        }
        
        } catch (error) {
          alert("Error en la actualización")
        }
       
      }
      async function  newDataImagen(){
        try {
        const { error } = await supabase
        .from('imagenes')
        .update(
          {'imagenurlima': urlImagen.value,
        }
          )
        .eq('idplanta',dataEdit.value.idplanta)
        .select()

        if (error ) {
          alert("Error en la actualización")
        }else{
          alert("Nueva imagen actualizada")
        }
        
        } catch (error) {
          alert("Error en la actualización")
        }
       
      }
      async function  newData3(){
        try {
        const { error } = await supabase
        .from('usos')
        .update(
          {'usous':usousF.value,
          'parteutilizadaus':parteutilizadausF.value,
          'descripcionus':descripcionusF.value,
        })
        .eq('idplanta',dataEdit.value.idplanta)
        .select()

        if (error ) {
          console.log("Error en la creación")
        }else{
          alert("Uso actualizado correctamente")
        }
        } catch (error) {
          console.log("Error en la creación")
        }
       
      }
      async function  newData4(){
        try {
        const { error } = await supabase
        .from('morfologias')
        .update(
          {
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
        })
        .eq('idplanta',dataEdit.value.idplanta)
        .select()

        if (error ) {
          console.log("Error en la creación")
        }else{
          alert("Morfología actualizada correctamente")


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

  async function getUsos() {
      try {
      const { data,error,status } = await supabase
      .from('usos')
      .select('*')
      .eq('idplanta',dataEdit.value.idplanta)

      if (error && status !== 406) throw error
      if (data) {
        dataUsos.value=data[0]
          usousF.value=dataUsos.value.usous
          parteutilizadausF.value=dataUsos.value.parteutilizadaus
          descripcionusF.value=dataUsos.value.descripcionus
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
      .eq('idplanta',dataEdit.value.idplanta)

      if (error && status !== 406) throw error
      if (data) {
        dataMorfologia.value=data[0]
        
          tipohojamorfoloF.value=dataMorfologia.value.tipohojamorfolo
          colorhojamofoloF.value=dataMorfologia.value.colorhojamofolo
          tipotallomorfoloF.value=dataMorfologia.value.tipotallomorfolo
          colortallomorfoloF.value=dataMorfologia.value.colortallomorfolo
          flormorfoloF.value=dataMorfologia.value.flormorfolo
          colorflormorfoloF.value=dataMorfologia.value.colorflormorfolo
          formahojamorfoloF.value=dataMorfologia.value.formahojamorfolo
          texturahojamorfoloF.value=dataMorfologia.value.texturahojamorfolo
          habitatmorfoloF.value=dataMorfologia.value.habitatmorfolo
          semillamorfoloF.value=dataMorfologia.value.semillamorfolo
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
      .eq('idplanta',dataEdit.value.idplanta)

      if (error && status !== 406) throw error
      if (data) {
        dataImagenes.value=data[0]
        urlImagen.value=dataImagenes.value.imagenurlima
        }
      } catch (error) {
        alert(error.message)
      }
      }


        
      

    
  
  </script>
  
  <style >
  </style>