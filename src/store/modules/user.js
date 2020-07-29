import axios from 'axios';
import moment from 'moment';

const url = 'https://p-expense-tracker.herokuapp.com/api/user/';
// const url = 'http://localhost:5000/api/user/';
const ipDataKey = process.env.VUE_APP_IPDATAKEY;

const state = {
  currentUser: {}
};

const getters = {
  currentUser: state => state.currentUser
};

const actions = {
  signIn({ commit }, user) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://api.ipdata.co?api-key=${ipDataKey}`)
        .then(response => {
          const country = response.data;

          axios.post(`${url}signin`, user).then(response => {
            const dbUser = response.data;

            dbUser['$$symbol'] = country.currency.symbol;
            dbUser.modificationDate = moment(
              dbUser.modificationDate
            ).calendar();

            localStorage.setItem('user', JSON.stringify(dbUser));

            commit('setUser', dbUser);
            resolve(response);
          });
        })
        .catch(error => reject(error));
    });
  },

  signUp(_, user) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}signup`, user)
        .then(response => {
          resolve(response);
        })
        .catch(error => reject(error));
    });
  },

  updateUser({ commit }, id) {
    axios.patch(`${url}${id}`).then(response => {
      const dbUser = response.data;
      dbUser.modificationDate = moment(dbUser.modificationDate).calendar();
      localStorage.setItem('user', JSON.stringify(dbUser));
      commit('setUser', dbUser);
    });
  }
};

const mutations = {
  setUser: (state, currentUser) => (state.currentUser = currentUser)
};

export default {
  state,
  getters,
  actions,
  mutations
};
