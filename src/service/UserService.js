import axios from 'axios';

const url = 'https://p-expense-tracker.herokuapp.com/api/user/';
// const url = 'http://localhost:5000/api/user/'

class UserService {
  static signup(user) {
    return axios.post(`${url}signup`, {
      ...user
    });
  }

  static signin(user) {
    return axios.post(`${url}signin`, {
      ...user
    });
  }

  static update(id) {
    return axios.patch(`${url}${id}`);
  }
}

export default UserService;
