import {createRouter} from 'vue-router'
import Homepage from './home/Home.vue';
import Login from './login/Login.vue';
import Menu from './menu/Menu.vue';

const routes = [
  {
    path: '/',
    component: Homepage
  },

  {
    path: '/login/',
    component: Login
  },

  {
    path: '/menu/',
    component: Menu
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}