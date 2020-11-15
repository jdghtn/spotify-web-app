<template>
  <div>
    <hr/>
    <div class="container text-center">
      <div class="row display-flex">
        <!-- Loops through the array returned from hitting the API's endpoint. -->
        <div class="col-sm-4" v-for="artist in topArtists" v-bind:key="artist.name">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                <!-- Displays the artist's name as a link to their Spotify profile. -->
                <a v-bind:href="artist.external_urls.spotify" target="new"> {{ artist.name }} </a>
              </h3>
            </div>
            <div>
              <!-- Displays the album art. -->
              <img class="img-responsive" v-bind:src="artist.images[0].url">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTopArtists } from '../../utils/api' // api.js
export default {
  name: 'topArtists',
  data () {
    return {
      // Initializes topArtists.
      topArtists: ''
    }
  },
  methods: {
    // The local getTopArtists function calls to the getTopArtists function in api.js (line 27).
    getTopArtists () {
      // Response from localhost:3333/api/artists is stored locally.
      getTopArtists().then((artists) => {
        this.topArtists = artists
      })
    }
  },
  // Executes when the page is loaded.
  mounted () {
    this.getTopArtists()
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
a {
  color: black;
  font-size: 17px;
  font-weight: bold;
} 
</style>
