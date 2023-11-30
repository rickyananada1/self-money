import {createRouter} from 'vue-router'
import Homepage from './home/Home.vue';
import Login from './login/Login.vue';
import Menu from './menu/Menu.vue';

const routes = [
  {
    path: '/home',
    component: Homepage
  },

  {
    path: '/',
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