<template>
  <div id="app">
      <router-view />
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

  p.error {
    position: absolute;
    bottom: 20%;
    font-size: 15px;
    color: #fa163f;
  }
}

.popover {
  .popover-body {
    display: flex;
    flex-wrap: wrap;

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
</style>
