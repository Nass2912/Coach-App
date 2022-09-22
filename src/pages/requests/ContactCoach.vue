<template>
  <form @submit.prevent="submittedForm">
    <div class="form-control">
      <label for="email">Your Email</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model="message" />
      <p v-if="!formIsValid" class="errors">
        Incorrect / Empty email address or No message
      </p>
    </div>
    <div class="form-control"></div>
    <base-button>Send Message</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      formIsValid: true,
    };
  },
  methods: {
    submittedForm() {
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === ""
      ) {
        this.formIsValid = false;
        return;
      } else {
        let data = {
          email: this.email,
          message: this.message,
          coachId: this.$route.params.id,
          id: "c4",
        };
        this.$store.dispatch("ContactCoach", data);
        this.$router.push("/coaches");
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
