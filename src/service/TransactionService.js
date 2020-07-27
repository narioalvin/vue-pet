import axios from 'axios';

const url = 'https://p-expense-tracker.herokuapp.com/api/transaction/';
// const url = 'http://localhost:5000/api/transaction/';

class TransactionService {
  static create(value) {
    return axios.post(`${url}create`, {
      ...value,
    });
  }

  static getAll(userId) {
    return axios.get(`${url}all/${userId}`);
  }

  static delete(id) {
    return axios.delete(`${url}${id}`);
  }

  static reset(userId) {
    return axios.delete(`${url}reset/${userId}`);
  }
}

export default TransactionService;
