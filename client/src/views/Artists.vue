<template>
  <div>
    <nav></nav>
    <h3 class="text-center">Top Artists</h3>
    <hr/>
    <div class="col-sm-4" v-for="artist in topArtists" v-bind:key="artist">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ artist.name }} </h3>
        </div>
        <div class="panel-body">
        </div>
      </div>
    </div>
    <div class="col-sm-12">
    </div>
  </div>
</template>

<script>
import Nav from './Nav'
import { getTopArtists } from '../services/Service.js'
export default {
  name: 'topArtists',
  components: {
    Nav
  },
  data () {
    return {
      topArtists: ''
    }
  },
  methods: {
    getTopArtists () {
      getTopArtists().then((artists) => {
        this.topArtists = artists
      })
    }
  },
  mounted () {
    this.getTopArtists()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
