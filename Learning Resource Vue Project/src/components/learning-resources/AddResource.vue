<template>
  <base-dialog
    v-if="isInputInvalid"
    title="Invalid Inputs"
    @close="confirmError"
  >
    <template #default>
      <p>unfortunately, your one inputs in invalid.</p>
      <p>
        Please check all the inputs and make sure every inputs has something
        writtened
      </p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okey</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="setInputs">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          ref="decsInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" ref="linkInput" />
      </div>
      <base-button type="submit">Add Resource</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      isInputInvalid: false,
    };
  },
  methods: {
    setInputs() {
      const title = this.$refs.titleInput.value;
      const decs = this.$refs.decsInput.value;
      const link = this.$refs.linkInput.value;

      if (title.trim() === '' || decs.trim() === '' || link.trim() === '') {
        this.isInputInvalid = true;
        return;
      }

      this.addResource(title, decs, link);
    },
    confirmError() {
      this.isInputInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
