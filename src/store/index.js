import Vuex from 'vuex';
import Vue from 'vue';
import transactions from './modules/transaction';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    transactions,
    user
  }
});
