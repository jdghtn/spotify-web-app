<template>
  <div>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="song in recentlyPlayed" v-bind:key="song.name">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title"> {{ song.track.name }} </h3>
              <span v-for="artist in song.track.album.artists" v-bind:key="artist.id">
                <a v-bind:href="artist.external_urls.spotify" target="new"> {{ artist.name }} </a>
              </span>
            </div>
            <div>
              <img class="img-responsive" v-bind:src="song.track.album.images[0].url">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecentlyPlayed } from '../../utils/api'
export default {
  name: 'recentlyPlayed',
  data () {
    return {
      recentlyPlayed: ''
    }
  },
  methods: {
    getRecentlyPlayed () {
      getRecentlyPlayed().then((plays) => {
        this.recentlyPlayed = plays
      })
    }
  },
  mounted () {
    this.getRecentlyPlayed()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-responsive {
    width:100%;
    max-width:1000px;
}
</style>
