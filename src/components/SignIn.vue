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
          placeholder="Enter your name"
        />
        <font-awesome-icon class="sign-in-up-icon" :icon="['fas', 'user']" />
      </div>

      <div class="input-form">
        <input
          v-model="user.passcode"
          type="password"
          maxlength="4"
          class="custom-input mb-4"
          @keydown="preventInvalidChars($event)"
          placeholder="Enter 4 digit passcode"
        />
        <font-awesome-icon class="sign-in-up-icon" :icon="['fas', 'key']" />
      </div>

      <p class="error" v-if="errorMessage !== ''">{{ errorMessage }}</p>
      <button @click="handleSignIn" class="proceed-btn">
        SIGN IN
        <b-spinner class="action-spinner" v-if="loading"></b-spinner>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SignIn',
  props: ['userFromSignUp'],
  data() {
    return {
      ipDataKey: process.env.VUE_APP_IPDATAKEY,
      user: {
        name: '',
        passcode: ''
      },
      errorMessage: '',
      loading: false
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
    ...mapActions(['signIn']),
    handleSignIn() {
      this.loading = true;
      this.errorMessage = '';

      this.signIn(this.user).then(
        () => {
          this.$router.push({
            name: 'Overview'
          });
          this.loading = false;
        },
        error => {
          this.errorMessage = error.response.data;
          this.loading = false;
        }
      );
    },
    directToSignUp() {
      const element = document.querySelector('.content');
      element.style['-webkit-animation'] = 'animRight .5s forwards';

      setTimeout(() => {
        this.$router.push({ name: 'SignUp' });
      }, 90);
    },
    preventInvalidChars(evt) {
      if (
        (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
        evt.which > 57
      ) {
        evt.preventDefault();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sign-in-up .content .logo {
  text-align: center;
  margin-bottom: 30px;

  img {
    margin-bottom: 20px;
  }
}
</style>
