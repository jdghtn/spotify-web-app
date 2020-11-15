<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">  <!-- href="/"> -->
      <strong class="is-size-4">-ify</strong>
    </a>
    <!-- <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a> -->
  </div>
  <div id="navbar" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
      <!-- <a v-if="$auth.isAuthenticated"> -->
        <router-link to="/tracks" class="navbar-item">Top Tracks</router-link>
        <router-link to="/artists" class="navbar-item">Top Artists</router-link>
        <router-link to="/recently-played" class="navbar-item">Recently Played</router-link>
        <router-link to="/recommendations" class="navbar-item">Recommendations</router-link>
      <!-- </a> -->
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <!-- Check that the SDK client is not currently loading before accessing is methods -->
          <div v-if="!$auth.loading">
            <!-- show login when not authenticated -->
            <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"><strong>Log in</strong></a>
            <!-- show logout when authenticated -->
            <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark"><strong>Log out</strong></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<!-- Logs the user in and out -->
<script>
export default {
  name: 'app-nav',
  methods: {
    // Log the user in
    login() {
      // window.location.href = 'http://localhost:3333/login';
      this.$auth.loginWithRedirect({
        redirect_uri: 'http://localhost:3333/login'
      });
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a, a:hover {
      font-weight: bold;
      color: black;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }
  }
</style>
