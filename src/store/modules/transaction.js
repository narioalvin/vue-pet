import axios from 'axios';
import moment from 'moment';

const url = 'https://p-expense-tracker.herokuapp.com/api/transaction/';
// const url = 'http://localhost:5000/api/transaction/';

const state = {
  transactions: {}
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
          if (response.data.length > 0) {
            const data = response.data.sort(
              (a, b) => new Date(b.creationDate) - new Date(a.creationDate)
            );

            const transactions = initTransactions(data);
            commit('setTransactions', transactions);
          } else {
            commit('setTransactions', {
              $$balance: 0,
              $$expense: 0,
              $$income: 0,
              data: []
            });
          }

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
  newTransaction: (state, transaction) => {
    state.transactions.data.unshift(transaction);
    initTransactions(state.transactions.data);
  },
  removeTransaction: (state, id) => {
    const transactions = state.transactions.data.filter(
      transaction => transaction._id !== id
    );
    transactions.length > 0 ? initTransactions(transactions) : resetData();
  },
  resetTransactions: () => resetData()
};

const initTransactions = data => {
  const transactions = data
    .map(transaction => {
      transaction.amount = +transaction.amount;
      transaction['$$creationDate'] = moment(
        new Date(transaction.creationDate)
      ).fromNow();

      return transaction;
    })
    .reduce((arr, obj) => {
      arr['data'] = arr['data'] || [];

      let income = 0;
      let expense = 0;

      arr['data'].push(obj);

      arr['data'].forEach(obj => {
        if (obj.type === 'income') {
          income += +obj.amount;
        } else {
          expense += +obj.amount;
        }

        arr['$$income'] = income;
        arr['$$balance'] = income - expense;
        arr['$$expense'] = expense;
      });

      return arr;
    }, {});

  state.transactions = transactions;

  return transactions;
};

const resetData = () => {
  return (state.transactions = {
    $$balance: 0,
    $$expense: 0,
    $$income: 0,
    data: []
  });
};

export default {
  state,
  getters,
  actions,
  mutations
};
