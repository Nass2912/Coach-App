<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Recieved</h2>
      </header>
      <ul>
        <RequestCoach
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.email"
          :message="req.message"
        />
      </ul>
      <h3 v-if="!checkRequests">You haven't recieved any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestCoach from "../../components/coaches/RequestCoach.vue";
export default {
  components: {
    RequestCoach,
  },
  computed: {
    receivedRequests() {
      return this.$store.getters.fetchRequests;
    },
    checkRequests() {
      return this.$store.getters.checker;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
