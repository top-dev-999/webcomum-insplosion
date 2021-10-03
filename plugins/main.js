import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCookies from 'vue-cookies';
import VSwitch from 'v-switch-case';
import VueMq from 'vue-mq';
import VueScrollactive from 'vue-scrollactive';


Vue.use(VueCookies);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VSwitch);
Vue.use(VueScrollactive);
Vue.use(VueMq, {
  breakpoints: {
    mobile: 600,
    tablet: 1280,
    desktop: Infinity, 
  }
})

export default ({ app }, inject) => {
  inject('verifyCookies', function(){
    if (VueCookies.isKey('Insplosion')) {
      this.$store.dispatch('setCookiesTrue')
    }
    else{
      this.$store.dispatch('setCookiesFalse')
    }
  });
  inject('overflowModal', function(){
    (this.$store.state.overflow) ? document.querySelector('html').classList.add('no-overflow') : document.querySelector('html').classList.remove('no-overflow');
  });
  inject('scrollHeader', function(){

  });

}

