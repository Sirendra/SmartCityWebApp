import { createRouter, createWebHistory } from 'vue-router'
import Restaurant from '../views/Restaurant.vue'

import SignIn from '../views/SignIn.vue'
import Place from '../views/Place.vue'
import Event from '../views/Event.vue'
import Amenity from '../views/Amenity.vue'

import Home from '../views/Home.vue'
import RestaurantDetail from '../views/RestaurantDetail.vue'
import EveDetail from '../views/EveDetail.vue'
import AttDetail from '../views/AttDetail.vue'
import AmenDetail from '../views/AmenDetail.vue'

import firebase from 'firebase'

// import HelloWorld from '../views/HelloWorld.vue'

const routerHistory = createWebHistory()

const routes = [
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: Restaurant,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/place',
    name: 'Place',
    component: Place,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/restaurantdetail/:id',
    name: 'RestaurantDetail',
    component: RestaurantDetail,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/eventdetail/:id',
    name: 'EveDetail',
    component: EveDetail,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/attractiondetail/:id',
    name: 'AttDetail',
    component: AttDetail,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/amenitydetail/:id',
    name: 'AmenDetail',
    component: AmenDetail,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/event',
    name: 'Event',
    component: Event,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/amenity',
    name: 'Amenity',
    component: Amenity,
    meta: {
      requiresAuth: true
    }
  },

  
  {
    path: '/:catchAll(.*)',
    redirect: '/signin'
  },
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  }

]

const router = createRouter({
	history: createWebHistory(),
	routes,
})
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    console.log("You are not authorized to access this area.");
    next('signin')
  } else if (!requiresAuth && currentUser) {
    console.log("You are authorized to access this area.");
    next('home')
  } else {
    next()
  }
})

export default router