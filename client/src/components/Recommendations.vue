<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Recommendations</h3>
    <hr/>
    <div class="col-sm-4" v-for="tracks in recommendations" v-bind:key="tracks.artists">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ "tracks.album.artists.name" }} </h3>
        </div>
        <div class="panel-body"> {{ "tracks.album.images[1].url" }}
        </div>
      </div>
        {{ "artist(s)" }}
    </div>
    <div class="col-sm-12">
    </div>
  </div>
</template>

<script>
import Nav from './Nav'
import { getRecommendations } from '../services/Service.js'
export default {
  name: 'recommendations',
  components: {
    Nav
  },
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
</style>
