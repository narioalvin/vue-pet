<template>
  <div id="app">
    <!-- <transition name="slide-fade"> -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'App',
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Lato';
  src: url('./assets/font/Lato-Regular.ttf');
  src: local('Lato Regular'), local('Lato-Regular'),
    url('./assets/font/Lato-Regular.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url('./assets/font/Lato-Bold.ttf');
  src: local('Lato Bold'), local('Lato-Bold'),
    url('./assets/font/Lato-Bold.ttf') format('opentype');
  font-weight: bold;
  font-style: normal;
}

// .slide-fade-enter-active {
//   transition: all 0.3s ease;
// }
// .slide-fade-leave-active {
//   transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
// }
// .slide-fade-enter,
// .slide-fade-leave-to {
//   transform: translateX(50px);
//   opacity: 0;
// }

body {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.modal {
  legend,
  label {
    font-weight: bold;
  }

  .submit-btns {
    text-align: right;

    button {
      min-width: 110px;
      border-radius: 25px;
    }

    .cancel {
      margin-right: 10px;
      border: 1px solid #bfbfbf;
    }

    .submit {
      background: #ff2e63;
      border: 1px solid #ff2e63;
      position: relative;

      &:hover {
        background: #ff1a53;
        border: 1px solid #ff1a53;
      }
    }
  }

  .custom-control {
    legend,
    label {
      cursor: pointer;
    }
  }

  p.error {
    position: absolute;
    bottom: 20%;
    font-size: 15px;
    color: #fa163f;
  }

  .modal-spinner {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 8%;
    top: 28%;
  }

  .category-ddown {
    button {
      background: #ffffff;
      color: #495057;
      border-color: #ced4da;
      text-align: left;
      text-transform: capitalize;

      &:hover {
        background: #ff2e63;
        border: 1px solid #ff2e63;
        color: #ffffff;
      }

      &:after {
        float: right;
        margin-top: 10px;
      }
    }

    .b-dropdown-form {
      display: flex;
      flex-wrap: wrap;

      &:focus,
      &:active {
        outline: none !important;
      }

      div {
        width: 59px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        margin: 5px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 14px;

        &:hover {
          background: #f2f2f2;
        }

        .dd-icons {
          width: 38px;
          height: 38px;
          text-align: center;
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        svg {
          font-size: 15px;
        }
      }
    }

    .dropdown-item {
      text-transform: capitalize;
      display: flex;

      .dd-icons {
        width: 26px;
        height: 26px;
        text-align: center;
        border-radius: 50%;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
      }

      svg {
        font-size: 12px;
      }
    }
  }
}

.popover {
  .popover-body {
    display: flex;
    flex-wrap: wrap;

    ul {
      list-style-type: none;
    }

    .avatar-selection {
      margin: 4px 7px 10px 0;

      img {
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    svg {
      color: #fa163f;
      cursor: pointer;
    }
  }
}

.form-row {
  flex-direction: column;
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

@keyframes animRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-30px);
    opacity: 0;
  }
}
</style>
