<template>
  <base-card>
    <h2>Find your Coach</h2>
    <form>
      <span class="filter-option">
        <input checked @change="checkInput" type="checkbox" id="frontend" />
        <label for="frontend">frontend</label><br />
      </span>
      <span class="filter-option">
        <input checked @change="checkInput" type="checkbox" id="backend" />
        <label for="backend">backend</label><br />
      </span>
      <span class="filter-option">
        <input checked @change="checkInput" type="checkbox" id="career" />
        <label for="career">career</label><br />
      </span>
    </form>
  </base-card>
</template>

<script>
export default {
  emits: ["updated-filters"],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  methods: {
    checkInput(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("updated-filters", updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
