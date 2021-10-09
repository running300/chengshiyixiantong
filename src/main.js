// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import  '@/assets/styles/resets.css';
import '@/assets/styles/border.css';
import '@/assets/styles/common.scss';
import '@/assets/styles/iconfont.css';
import '@/assets/js/fastclick.js';
import '@/assets/js/common.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
