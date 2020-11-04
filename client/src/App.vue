<template>
  <div id="App">
    <AppNav />
    <router-view/>
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue';
export default {
  name: 'App',
  components: {
    AppNav
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // About text colour
  color: black;
}
</style>
