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



createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);
app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);

