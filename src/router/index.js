import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Pages/HomeView.vue'
import Register from '@/views/Pages/Authentication/Register.vue'
import Signin from '@/views/Pages/Authentication/Signin.vue'
import Dashboard from '@/views/Pages/Dashboard.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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
      path: '/Dashboard',
      name: 'dashboard',
      component: import("../views/Pages/Dashboard.vue"),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) =>
  {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}

router.beforeEach(async(to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth))
  {
    if(await getCurrentUser())
    {
      next();
    }
    else
    {
      next("/")
      alert("you don't have access!")
    }
  }
  else
  {
    next()
  }
})

export default router
