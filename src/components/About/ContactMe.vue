<template>
  <div class="contact-form" id="contact">
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
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      successMessage: '',
    };
  },
  methods: {
    submitForm() {
      const templateParams = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      emailjs
        .send(
          'service_h1mdfiq',
          'template_c9d1b1x',
          templateParams,
          'YHjbt9m2fON0RaDE1'
        )
        .then(() => {
          this.successMessage = 'Message sent successfully!';
          this.name = '';
          this.email = '';
          this.message = '';
        })
        .catch((error) => {
          console.error('Error sending message:', error);
          this.successMessage =
            'Failed to send message. Please try again later.';
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-form {
  padding: 20px;
  border-radius: 8px;
  width: 35%;
  margin: 5% auto;
}

.success-message {
  color: green;
  margin-top: 10px;
}

.form-row {
  display: flex;
  margin-bottom: 15px;
}

.form-input,
.form-textarea {
  flex: 1;
  padding: 15px;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-input {
  margin-right: 10px;
}

.form-input:last-child {
  margin-right: 0;
}

.form-textarea {
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

@media screen and (min-width: 1000px) and (max-width: 1300px) {
  .contact-form {
    width: 45%;
  }
}

@media screen and (max-width: 1000px) {
  .contact-form {
    width: 60%;
  }
  .form-row {
    flex-direction: column;
  }

  .form-input {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .form-textarea {
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 700px) {
  .contact-form {
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    margin: 10% auto;
  }

  .form-textarea {
    width: 100%;
  }
}
</style>
