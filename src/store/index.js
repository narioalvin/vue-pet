import Vuex from 'vuex';
import Vue from 'vue';
import transactions from './modules/transaction';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    transactions,
  },
});
