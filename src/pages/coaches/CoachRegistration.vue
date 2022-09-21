<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <CoachForm @form-emit="sendForm" />
    </base-card>
  </section>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";
export default {
  components: {
    CoachForm,
  },
  methods: {
    sendForm(data) {
      this.$store.dispatch("RegisterCoach", data);
    },
  },
};
</script>
