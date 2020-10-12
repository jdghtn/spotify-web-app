<template>
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
</template>
<script>
import Card from "@/components/Card";
import Service from '@/services/Service.js'; // NEW
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
    this.getEventsData(); // NEW - call getEventData() when the instance is created
  },
  // NEW
  methods: {
    async getEventsData() {
      // NEW - Use the eventService to call the getEvents() method
      Service.getEvents()
      .then(
        (events => {
          this.$set(this, "events", events);
        }).bind(this)
      );
    }
  }
};
</script>
<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>
