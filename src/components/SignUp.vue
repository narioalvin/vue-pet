<template>
  <div class="sign-in-up">
    <div class="content">
      <div class="avatar">
        <div class="circle" id="popover-avatar">
          <img
            class="selected-avatar"
            v-if="selectedAvatar !== ''"
            :src="require(`../assets/avatars/${selectedAvatar}.svg`)"
            width="40"
            alt=""
          />
          <font-awesome-icon
            v-if="selectedAvatar === ''"
            :icon="['fas', 'plus']"
            @click="showPopover = !showPopover"
          />
          <b-popover
            class="popover-avatars"
            target="popover-avatar"
            placement="bottom"
            :show.sync="showPopover"
          >
            <div
              class="avatar-selection"
              v-for="(item, index) in avatars"
              :key="index"
            >
              <img
                @click="
                  selectAvatar(item);
                  showPopover = !showPopover;
                "
                :src="require(`../assets/avatars/${item}.svg`)"
                width="55"
                alt=""
              />
            </div>
          </b-popover>
        </div>

        <h5>Choose your avatar</h5>
      </div>
      <div class="mb-4 sign-in-up-header">
        <h1>Register</h1>
        <button class="btn-link" @click="directToSignIn">
          Already a member
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
          @keydown="preventInvalidChars($event)"
          class="custom-input mb-4"
          placeholder="4 digit passcode"
        />
        <font-awesome-icon class="sign-in-up-icon" :icon="['fas', 'key']" />
      </div>

      <p class="error" v-if="errorMessage !== ''">{{ errorMessage }}</p>
      <button @click="signUp" class="proceed-btn">
        REGISTER
        <b-spinner v-if="loading" class="action-spinner"></b-spinner>
      </button>
    </div>
  </div>
</template>

<script>
import UserService from '../service/UserService';

export default {
  name: 'SignUp',
  data() {
    return {
      user: {
        name: '',
        passcode: '',
        avatar: '',
      },
      errorMessage: '',
      loading: false,
      avatars: [
        '001-man',
        '002-woman',
        '003-delivery-man',
        '004-man',
        '005-woman',
        '006-nurse',
        '007-woman',
        '008-man',
        '009-girl',
        '010-man',
        '011-girl',
        '012-boy',
        '013-girl',
        '014-bell-boy',
        '015-girl',
        '016-punk',
      ],
      showPopover: false,
      selectedAvatar: '',
    };
  },
  created() {},
  mounted() {
    const element = document.querySelector('.content');
    element.style['-webkit-animation'] = 'animLeft .5s';
  },
  methods: {
    signUp() {
      this.loading = true;
      this.errorMessage = '';

      UserService.signup(this.user).then(
        () => {
          this.$router.push({
            name: 'SignIn',
            params: {
              userFromSignUp: {
                name: this.user.name,
                passcode: this.user.passcode,
              },
            },
          });
          this.loading = false;
        },
        (error) => {
          this.errorMessage = error.response.data;
          this.loading = false;
        }
      );
    },
    selectAvatar(value) {
      this.user.avatar = value;
      this.selectedAvatar = value;
    },
    directToSignIn() {
      this.$router.push({ name: 'SignIn' });
    },
    preventInvalidChars(evt) {
      if (
        (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
        evt.which > 57
      ) {
        evt.preventDefault();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.sign-in-up {
  .avatar {
    @include flex(center, center, column);
    margin-bottom: 30px;

    .circle {
      height: 80px;
      width: 80px;
      background: #ffb129;
      color: #ffffff;
      border-radius: 50%;
      @include flex(center, center, column);

      cursor: pointer;

      &:hover {
        background: #bfbfbf;
      }

      .selected-avatar {
        width: 70px;
        position: absolute;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }

      svg {
        font-size: 20px;
      }
    }

    h5 {
      margin: 20px 0 0 0;
    }
  }
}
</style>
