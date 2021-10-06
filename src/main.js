import { createApp } from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

import './index.css'


let app


firebase.auth().onAuthStateChanged((user)=>{
  if(!app){
    app=createApp(App).use(router).mount('#app')
  }
})

