<template>
  <div class="contact-form">
    <h1>Contact me</h1>
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <input
          type="text"
          v-model="name"
          placeholder="Name"
          class="form-input"
          required
        />
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          class="form-input"
          required
        />
      </div>
      <div class="form-row">
        <textarea
          v-model="message"
          placeholder="Message"
          class="form-textarea"
          required
        ></textarea>
      </div>
      <div class="form-row submit-row">
        <button type="submit" class="form-submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      alert(
        `Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`
      );
    },
  },
};
</script>

<style scoped>
.contact-form {
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 5% auto;
}

.form-row {
  display: flex;
  margin-bottom: 15px;
}

.form-input {
  flex: 1;
  margin-right: 10px;
  padding: 15px;
  border: 1px solid lightgray;
  border-radius: 4px;
}

.form-input:last-child {
  margin-right: 0;
}

.form-textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid lightgray;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
}

.submit-row {
  justify-content: flex-end;
  display: flex;
}

.form-submit {
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.form-submit:hover {
  background-color: #333;
}
</style>
