<template>
  <section>Filter</section>
  <BaseCard>
    <section>
      <div class="controls">
        <button>refresh</button>
        <router-link to="/register">Register as Coach</router-link>
      </div>
    </section>
    <ul v-if="hasCoaches">
      <CoachItem
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :lastName="coach.lastName"
        :firstName="coach.firstName"
        :areas="coach.areas"
        :rate="coach.hourlyRate"
        :id="coach.id"
      />
    </ul>
    <h3 v-else>No Coaches Found</h3>
  </BaseCard>
</template>

<script>
import CoachItem from "@/components/coaches/CoachItem.vue";
import BaseCard from "@/components/UI/BaseCard.vue";
export default {
  components: { CoachItem, BaseCard },
  computed: {
    filteredCoaches() {
      return this.$store.getters.coaches;
    },
    hasCoaches() {
      return this.$store.getters.hasCoaches;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
