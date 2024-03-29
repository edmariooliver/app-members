import 'mosha-vue-toastify/dist/style.css'
import './assets/main.css'
import 'vuetify/styles'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'mosha-vue-toastify/dist/style.css'
import '@mdi/font/css/materialdesignicons.css'

import router from './router'
import {ref, createApp } from 'vue'
import App from './App.vue'
import api from './services/api'
import validateSession from './services/validateSession';

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from './store/store';

const darkTheme = ref(store.dark);

if(localStorage.getItem('dark') != undefined){
  darkTheme.value = localStorage.getItem('dark')
}

store.dark = darkTheme.value;

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: darkTheme.value ? 'dark' : 'light',
      }
})

const app = createApp(App)

const loading = ref(false)

app.use(validateSession)
app.use(loading)
app.use(router)
app.use(vuetify)
app.use(api)
app.use({iconfont: 'mdi'})
app.mount('#app')