<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            -ify
          </h1>
          <h2 class="subtitle">
            Your Top Tracks, Top Artists, and much more at your fingertips.
          </h2>
          <div class="notes">
            <img class="img" src="../../public/notes.png" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('../../public/gradient.jpg');
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-width: 100%;
  height: 100vh;
}
.hero-body .title {
  padding: 40px 0 20px 0;
  font-size: 60px;
}
.subtitle {
  font-size: 30px;
}
.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -125px;
  .button {
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .welcome {
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
.is-xl {
  font-size: 1.7rem;
}
.notes {
  width: 50%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
