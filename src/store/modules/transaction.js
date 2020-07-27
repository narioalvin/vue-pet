import axios from 'axios';
import moment from 'moment';

// const url = 'https://p-expense-tracker.herokuapp.com/api/transaction/';
const url = 'http://localhost:5000/api/transaction/';

const state = {
  transactions: []
};

const getters = {
  transactions: state => state.transactions
};

const actions = {
  getAll({ commit }, userId) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}all/${userId}`)
        .then(response => {
          const transactions = response.data
            .map(transaction => {
              transaction.amount = +transaction.amount;
              transaction['$$creationDate'] = moment(
                new Date(transaction.creationDate)
              ).fromNow();
              return transaction;
            })
            .sort(
              (a, b) => new Date(b.creationDate) - new Date(a.creationDate)
            );

          commit('setTransactions', transactions);
          resolve(response);
        })
        .catch(error => reject(error));
    });
  },
  addTransaction({ commit }, transaction) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}create`, transaction)
        .then(response => {
          const transaction = response.data;
          transaction.amount = +transaction.amount;
          transaction['$$creationDate'] = moment(
            new Date(transaction.creationDate)
          ).fromNow();

          commit('newTransaction', transaction);
          resolve(response);
        })
        .catch(error => reject(error));
    });
  },
  deleteTransaction({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${url}${id}`)
        .then(response => {
          commit('removeTransaction', id);
          resolve(response);
        })
        .catch(error => reject(error));
    });
  },
  resetTransactions({ commit }, userId) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${url}reset/${userId}`)
        .then(response => {
          commit('resetTransactions');
          resolve(response);
        })
        .catch(error => reject(error));
    });
  }
};

const mutations = {
  setTransactions: (state, transactions) => (state.transactions = transactions),
  newTransaction: (state, transaction) =>
    state.transactions.unshift(transaction),
  removeTransaction: (state, id) =>
    (state.transactions = state.transactions.filter(
      transaction => transaction._id !== id
    )),
  resetTransactions: state => (state.transactions = [])
};

export default {
  state,
  getters,
  actions,
  mutations
};
