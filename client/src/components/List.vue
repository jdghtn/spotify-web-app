<!-- <template>
  <div class="events container">
    <h2 class="subtitle is-3">
    Features:
    </h2>
    <div class="columns is-multiline">
      <div v-for="event in events" :event="event" :key="event.id" class="column is-one-quarter">
        <router-link :to="'/event/' + event.id">
          <Card :event="event" />
        </router-link>
      </div>
    </div>
  </div>
</template> -->

<!-- Displays feature cards on the home page -->
<!-- Card redirection pages-->
<!-- <script>
import Card from "@/components/Card";
import Service from '@/services/Service.js';
export default {
  name: "List",
  components: {
    Card
  },
  data() {
    return {
      event: {},
      events: []
    };
  },
  created() {
    // Call getEventData() when the instance is created
    this.getEventData();
  },
  methods: {
    async getEventData() {
      // Use the Service to call the getEvents() method
      Service.getEvents()
      .then(
        (events => {
          this.$set(this, "events", events);
        }).bind(this)
      );
    }
  }
};
</script> -->

<!-- <style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style> -->
