// import { apply } from 'core-js/fn/reflect'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import Root from './Root.vue'


createApp(App).use(router).mount('#app')
// createApp(Root).mount('#root')
