<template>
  <div class="sign-in-up">
    <div class="content">
      <div class="logo">
        <img src="../assets/img/money.svg" width="80" alt="" />
        <h5>Personal Expense Tracker</h5>
      </div>
      <div class="mb-4 sign-in-up-header">
        <h1>Sign In</h1>
        <button class="btn-link" @click="directToSignUp">
          Create Account
        </button>
      </div>
      <div class="input-form">
        <input
          v-model="user.name"
          type="text"
          class="custom-input mb-4"
          placeholder="Please type your name"
        />
        <font-awesome-icon class="sign-in-up-icon" :icon="['fas', 'user']" />
      </div>

      <div class="input-form">
        <input
          v-model="user.passcode"
          type="password"
          maxlength="4"
          class="custom-input mb-4"
          placeholder="Enter 4 digit passcode"
        />
        <font-awesome-icon class="sign-in-up-icon" :icon="['fas', 'key']" />
      </div>

      <p class="error" v-if="errorMessage !== ''">{{ errorMessage }}</p>
      <button @click="signIn" class="proceed-btn">
        SIGN IN
        <b-spinner class="action-spinner" v-if="loading"></b-spinner>
      </button>
    </div>
  </div>
</template>

<script>
import UserService from '../service/UserService';
import moment from 'moment';

export default {
  name: 'SignIn',
  props: ['userFromSignUp'],
  data() {
    return {
      user: {
        name: '',
        passcode: '',
      },
      errorMessage: '',
      loading: false,
    };
  },
  created() {
    if (this.userFromSignUp !== undefined) {
      this.user = this.userFromSignUp;
    }
  },
  mounted() {
    const element = document.querySelector('.content');
    element.style['-webkit-animation'] = 'animLeft .5s';
  },
  methods: {
    signIn() {
      this.loading = true;

      UserService.signin(this.user).then(
        (response) => {
          const user = response.data;
          user.modificationDate = moment().calendar();

          localStorage.setItem('user', JSON.stringify(user));

          this.$router.push({
            name: 'Overview',
            params: { user: user },
          });
          this.loading = false;
        },
        (error) => {
          this.errorMessage = error.response.data;
          this.loading = false;
        }
      );
    },
    directToSignUp() {
      this.$router.push({ name: 'SignUp' });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.sign-in-up .content .logo {
  text-align: center;
  margin-bottom: 30px;

  img {
    margin-bottom: 20px;
  }

  h5 {
    color: #ff2e63;
    font-weight: bold;
  }
}

@keyframes animLeft {
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
