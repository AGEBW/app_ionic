import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Details from '../views/Details.vue';
import ProductAdd from '../views/Admin/Product_Add.vue';
import ProductEdit from '../views/Admin/Product_Edit.vue';
import ProductList from '../views/Admin/Product_List.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component:Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/productadd',
    name: 'ProductAdd',
    component: ProductAdd
  },
  {
    path: '/productedit',
    name: 'ProductEdit',
    component: ProductEdit
  },
  {
    path: '/productlist',
    name: 'ProductList',
    component: ProductList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
