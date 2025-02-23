import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/* custom css link */
import './assets/sass/styles.scss'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')

/* import all of bootstrap js */
import * as bootstrap from 'bootstrap';