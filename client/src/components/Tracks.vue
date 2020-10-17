<template>
  <div>
    <nav></nav>
    <h3 class="text-center">Top Tracks</h3>
    <hr/>
    <div class="col-sm-4" v-for="song in topTracks" v-bind:key="song">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ song.name }} </h3>
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
import { getTopTracks } from '../services/Service.js'
export default {
  name: 'topTracks',
  components: {
    Nav
  },
  data () {
    return {
      topTracks: ''
    }
  },
  methods: {
    getTopTracks() {
      getTopTracks().then((songs) => {
        this.topTracks = songs
      })
    }
  },
  mounted () {
    this.getTopTracks()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
