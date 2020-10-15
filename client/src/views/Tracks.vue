<script>
import Service from '@/services/Service.js';
export default {
  data() {
    return {
      event: {},
      events: []
    };
  },
  created() {
    // Call getTopTracks() when the instance is created
    this.getTopTracks();
  },
  methods: {
    async getTopTracks() {
      // Use the Service to call the getTopTracks() method
      Service.getTopTracks()
      .then(
        (events => {
          this.$set(this, "tracks", events);
        }).bind(this)
      );
    }
  }
};
</script>
