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
    // Call getMyTopTracks() when the instance is created
    this.getMyTopTracks();
  },
  methods: {
    async getMyTopTracks() {
      // Use the Service to call the getMyTopTracks() method
      Service.getTracks()
      .then(
        (events => {
          this.$set(this, "tracks", tracks);
        }).bind(this)
      );
    }
  }
};
</script>
