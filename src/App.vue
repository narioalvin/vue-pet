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
  name: 'App'
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';

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

body {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
