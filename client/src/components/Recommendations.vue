<template>
  <div>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="song in recommendations.tracks" v-bind:key="song.id">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title"> {{ song.name }} </h3>
              <span v-for="artist in song.artists" v-bind:key="artist.id">
                <a v-bind:href="artist.external_urls.spotify" target="new"> {{ artist.name }}</a>
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
import { getRecommendations } from '../../utils/api'
export default {
  name: 'recommendations',
  data () {
    return {
      recommendations: ''
    }
  },
  methods: {
    getRecommendations () {
      getRecommendations().then((recommended) => {
        this.recommendations = recommended
      })
    }
  },
  mounted () {
    this.getRecommendations()
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
