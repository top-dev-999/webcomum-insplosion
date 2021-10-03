/*VUEX STORE*/
import Vue from 'vue';
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);
export const state = () => ({
  siteLang:null,
  showCookieBar:true,
  modal:false,
  overflow:false,

})

export const mutations = {
  setCookiesTrue(state){
    const date = new Date;
    date.setDate(date.getDate() + 1);
    VueCookies.set('Nieepoort', 'GH1.1.1689020474.1484362313', date);
    state.showCookieBar = false;
  },
  setCookiesFalse(state){
    VueCookies.remove("Nieepoort");
    state.showCookieBar = true;
  },
  setOverflow(state){
    state.overflow = !state.overflow;
  },
  setModal(state){
    state.modal = !state.modal;
  }


}


export const actions = {
  setCookiesTrue(context){
    context.commit('setCookiesTrue');
  },
  setCookiesFalse(context){
    context.commit('setCookiesFalse');
  },
  setOverflow(context){
    context.commit('setOverflow');
  },
  setModal(context){
    context.commit('setModal');
  }
}
