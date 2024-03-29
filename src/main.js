import Vue from 'vue'
import App from './App.vue'
import { i18n } from "@/plugins/i18n/i18n";
import Vue2TouchEvents from "vue2-touch-events";
import { VueMaskDirective } from "v-mask";

Vue.config.productionTip = false

Vue.directive("mask", VueMaskDirective);
Vue.use(Vue2TouchEvents);

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
