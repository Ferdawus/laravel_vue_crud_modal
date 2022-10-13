import './bootstrap';
import './dashboard';
import'../../node_modules/bootstrap/dist/js/bootstrap.min';

// import App from './App.vue';
import router from './router';
// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { useToastr } from './toastr';
import  Pagination  from './components/partials/PaginationComponent.vue';
const app = createApp({});
// const app_home = createApp(App);
const toastr = useToastr();

app.component('pagination',Pagination)
app.use(toastr)
app.use(router)
// app_home.mount('#app_home')
app.mount('#app')


