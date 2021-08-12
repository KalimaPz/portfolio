import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import EmailIcon from 'vue-material-design-icons/Email.vue';
import PhoneIcon from 'vue-material-design-icons/Phone.vue';
import PinIcon from 'vue-material-design-icons/MapMarker.vue';
const VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false
Vue.component('menu-icon', MenuIcon);
Vue.component('phone-icon', PhoneIcon);
Vue.component('email-icon', EmailIcon);
Vue.component('pin-icon', PinIcon);

Vue.use(Antd);
Vue.use(VueScrollTo)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')
