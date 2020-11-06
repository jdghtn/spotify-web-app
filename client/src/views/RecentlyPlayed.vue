<template>
  <div>
    <hr/>
    <div class="container text-center">
      <div class="row display-flex">
        <!-- Loops through the array returned from hitting the API's endpoint. -->
        <div class="col-sm-4" v-for="song in recentlyPlayed" v-bind:key="song.name">
          <div class="panel panel-default">
            <div class="panel-heading">
              <!-- Displays the song name. -->
              <h3 class="panel-title"> {{ song.track.name }} </h3>
              <!-- Loops through a different part of the array and displays the artist's name as a link to their Spotify profile. -->
              <span v-for="artist in song.track.album.artists" v-bind:key="artist.id" class="insertComma">
                <a v-bind:href="artist.external_urls.spotify" target="new"> {{ artist.name }} </a>
              </span>
            </div>
            <div>
              <!-- Dispays the album art. -->
              <img class="img-responsive" v-bind:src="song.track.album.images[0].url">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecentlyPlayed } from '../../utils/api' // api.js
export default {
  name: 'recentlyPlayed',
  data () {
    return {
      // Initializes recentlyPlayed.
      recentlyPlayed: ''
    }
  },
  methods: {
    // The local getRecentlyPlayed function calls to the getRecentlyPlayed function in api.js (line 29).
    getRecentlyPlayed () {
      // Response from localhost:3333/api/recently-played is stored locally.
      getRecentlyPlayed().then((plays) => {
        this.recentlyPlayed = plays
      })
    }
  },
  // Executes when the page is loaded.
  mounted () {
    this.getRecentlyPlayed()
  }
}
</script>

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
.insertComma + .insertComma:before {
  content: ", ";
  font-weight: normal;
}
h3 {
  color: black;
  font-size: 17px;
  font-weight: bold;
}
a {
  color: black;
  font-size: 17px;
  font-weight: normal;
} 
</style>
