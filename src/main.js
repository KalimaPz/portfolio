import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import EmailIcon from 'vue-material-design-icons/Email.vue';
import PhoneIcon from 'vue-material-design-icons/Phone.vue';
import PinIcon from 'vue-material-design-icons/MapMarker.vue';


Vue.config.productionTip = false
Vue.component('menu-icon', MenuIcon);
Vue.component('phone-icon', PhoneIcon);
Vue.component('email-icon', EmailIcon);
Vue.component('pin-icon', PinIcon);

Vue.use(Antd);
new Vue({
  render: h => h(App),
}).$mount('#app')
