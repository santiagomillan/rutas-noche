//import { metadata } from 'core-js/fn/reflect'
import Vue from 'vue'
import VueRouter from 'vue-router'
//import Login from '../views/Login.vue'
//import Servicios from '../views/Servicios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requireAuth : true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to , from , next)=>{
  if (to.matched.some(record => record.meta.requireAuth)){
    if(localStorage.getItem('jwt') === null ){
      next({
        path:'/'
      });
    }else{
        next(); 
    }
  }else{
    next();
  }
});

export default router
