import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard'


import profile from '../pages/profile'
import home from '../pages/home'
import about from '../pages/about'
import login from '../pages/login'
import registrar from '../pages/registrar'
import catalogo from '../pages/catalogo'
import descripcion from '../pages/descripcion'
import edicionPerfil from '../pages/edicionPerfil'
import listaClientes from '../pages/listaClientes'
import listaPlantas from '../pages/listaPlantas'
import nuevoUsuario from '../pages/nuevoUsuario'
import editarUsuarioAdmin from '../pages/editarUsuarioAdmin'
import editarPlantaAdmin from '../pages/editarPlantaAdmin'
import crearPlantaAdmin from '../pages/crearPlantaAdmin'
import editarDetallesAdmin from '../pages/editarDetallesAdmin'

const routes = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: dashboard,
      children: [
         {
          name: 'home',
          path: '/',
          component:home
        },
        
        {
          name: 'catalogo',
          path: '/catalogo',
          component:catalogo
        },  
        {
          name: 'descripcion',
          path: '/descripcion',
          component:descripcion
        }, 
   
       
        {
          name: 'profile',
          path: '/profile',
          component:profile
        }
        ,
        {
          name: 'nuevousaurio',
          path: '/nuevousuario',
          component:nuevoUsuario
        }
        ,
        {
          name: 'edicionPerfil',
          path: '/edicionperfil',
          component:edicionPerfil
        }
        ,
        {
          name: 'editarUsuarioAdmin',
          path: '/editarusuarioadmin',
          component:editarUsuarioAdmin
        }
        ,
        {
          name: 'editarPlantaAdmin',
          path: '/editarplantaadmin',
          component:editarPlantaAdmin
        }
        ,
        {
          name: 'crearPlantaAdmin',
          path: '/crearplantaadmin',
          component:crearPlantaAdmin
        }
        ,
        {
          name: 'editarDetallesAdmin',
          path: '/editardetallesadmin',
          component:editarDetallesAdmin
        }
        ,
        {
          name: 'about',
          path: '/about',
          component:about
        }
        ,
        {
          name: 'listaClientes',
          path: '/listaclientes',
          component:listaClientes
        }
        ,
        
        {
          name: 'listaPlantas',
          path: '/listaplantas',
          component:listaPlantas
        }
       
      
        
      ]
    },
    {
    name: 'Login',
    path: '/login',
    component: login,
    } ,
    {
    name: 'Registrar',
    path: '/registrar',
    component: registrar,
    } 
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
  