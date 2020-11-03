<template>
  <div>
    <hr/>
    <div class="container text-center">
      <div class="row display-flex">
        <div class="col-sm-4" v-for="artist in topArtists" v-bind:key="artist.name">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                <a v-bind:href="artist.external_urls.spotify" target="new"> {{ artist.name }} </a>
              </h3>
            </div>
            <div>
              <img class="img-responsive" v-bind:src="artist.images[0].url">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTopArtists } from '../../utils/api'
export default {
  name: 'topArtists',
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
  font-weight:bold;
} 
</style>
