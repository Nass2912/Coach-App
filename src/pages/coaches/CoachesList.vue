<template>
  <div>
    <FilterCoaches @updated-filters="setFilters" />
    <BaseCard>
      <section>
        <div class="controls">
          <button>refresh</button>
          <router-link to="/register"
            ><base-button>Register as Coach</base-button></router-link
          >
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
  </div>
</template>

<script>
import CoachItem from "@/components/coaches/CoachItem.vue";
import FilterCoaches from "@/components/coaches/FilterCoaches.vue";

export default {
  components: { CoachItem, FilterCoaches },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters.coaches;
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters.hasCoaches;
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
