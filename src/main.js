import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./gobel.css"
// import VueAMap from 'vue-amap';

// Vue.use(VueAMap);
// VueAMap.initAMapApiLoader({
//   key: 'b96e4018f7238d595d8b832468d16afa',
//   plugin: ['AMap.PolyEditor'],
//   v: '1.4.4'
// });
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
