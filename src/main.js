import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/saga-blue/theme.css'; // Theme
import 'primevue/resources/primevue.min.css';           // Core styles
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue3, IconsPlugin } from 'bootstrap-vue-3'


createApp(App).use(store).use(router).use(PrimeVue).use(ConfirmationService).use(ToastService).use(BootstrapVue3).use(IconsPlugin).mount('#app')




