<template>
  <div>
    <app-nav></app-nav>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="artist in topArtists" v-bind:key="artist.name">
          <div class="panel panel-default">
            <div class="panel-heaing">
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
import AppNav from './AppNav'
import { getTopArtists } from '../../utils/api'
export default {
  name: 'topArtists',
  components: {
    AppNav
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
.img-responsive {
    width:100%;
    max-width:1000px;
}
</style>
