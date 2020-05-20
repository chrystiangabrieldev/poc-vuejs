import Vue from 'vue';
import App from './App.vue';
import API from './components';

Vue.prototype.hubDeEventos = new Vue();

Vue.use(API);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
