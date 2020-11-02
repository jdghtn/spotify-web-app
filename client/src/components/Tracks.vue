<template>
  <div>
    <hr/>
    <div class="container text-center">
      <div class="row display-flex">
        <div class="col-sm-4" v-for="song in topTracks" v-bind:key="song.name">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title"> {{ song.name }} </h3>
              <span v-for="artist in song.artists" v-bind:key="artist.id">
                <a v-bind:href="artist.external_urls.spotify" target="new"> {{ artist.name }} </a>
              </span>
            </div>
            <div>
              <img class="img-responsive" v-bind:src="song.album.images[0].url">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTopTracks } from '../../utils/api'
export default {
  name: 'topTracks',
  data () {
    return {
      topTracks: ''
    }
  },
  methods: {
    getTopTracks () {
      getTopTracks().then((songs) => {
        this.topTracks = songs
      })
    }
  },
  mounted () {
    this.getTopTracks()
  }
}
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row.display-flex {
  display: flex;
  flex-wrap: wrap;
}
.row.display-flex > [class*='col-'] {
  display: flex;
  flex-direction: column;
}
.container.text-center {
  margin: auto; max-width: 600px;
}
</style>
