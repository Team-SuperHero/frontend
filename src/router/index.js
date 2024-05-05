import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Pages/HomeView.vue'
import Register from '@/views/Pages/Authentication/Register.vue'
import Signin from '@/views/Pages/Authentication/Signin.vue'
import Dashboard from '@/views/Pages/Dashboard.vue'
import Items from '@/components/Items.vue'
import ItemSold from '@/components/item-sold.vue'
import itemPurchased from '@/components/item-purchased.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import ItemPurchased from '@/components/item-purchased.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/dashboard/:id',
      name: 'dashboard',
      component : Dashboard,
      meta: {
        requiresAuth: true
      },
      children :[
        {
          path : 'items',
          component : Items
        },
        {
          path : 'items-sold',
          component : ItemSold
        },
        {
          path : 'items-purchased',
          component : ItemPurchased
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth))
  {
    if(!localStorage.getItem('acces_token'))
    {
      next("/signin");
    }
    else
    {
      next()
    }
  }
  else
  {
    next()
  }
})

export default router
