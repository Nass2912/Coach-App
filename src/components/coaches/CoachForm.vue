<template>
  <form @submit.prevent="submitted">
    <div class="form-control">
      <label for="firstname">FirstName</label>
      <input v-model.trim="firstName" type="text" id="firstname" />
    </div>
    <div class="form-control">
      <label for="Lastname">Lastname</label>
      <input v-model.trim="lastName" type="text" id="Lastname" />
    </div>
    <div class="form-control">
      <label for="Description">Description</label>
      <textarea v-model.trim="description" rows="5" id="Description" />
    </div>
    <div class="form-control">
      <label for="HourlyRate">Hourly Rate</label>
      <input v-model.number="hourlyRate" type="number" id="HourlyRate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">Frontend Development</label>
        <input type="checkbox" id="backend" value="backend" v-model="areas" />
        <label for="backend">backend Development</label>
        <input type="checkbox" id="career" value="career" v-model="areas" />
        <label for="career">career Development</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ["form-emit"],
  data() {
    return {
      firstName: "",
      lastName: "",
      description: "",
      hourlyRate: "",
      areas: [],
    };
  },

  methods: {
    submitted() {
      const formData = {
        fname: this.firstName,
        lname: this.lastName,
        desc: this.description,
        rate: this.hourlyRate,
        areas: this.areas,
      };

      this.$emit("form-emit", formData);
      this.$router.replace("/coaches");
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
