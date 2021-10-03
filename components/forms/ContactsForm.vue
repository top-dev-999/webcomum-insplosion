<template>
  <FormulateForm id="contact-form-tours" name="contact-form-page" v-model="values" @submit="submitContactsHandler">
    <div class="form-group ">
      <div class="row">
        <div class="col-12">
          <label class="black">First Name</label>
          <FormulateInput
              type="text"
              validation="required"
              validation-name="Name"
              v-model="firstName"
              placeholder="First Name and Last Name"
              :wrapper-class="['input-wrapper']"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-md-6 col-12">
          <label class="black">E-mail</label>
          <FormulateInput
              type="text"
              validation="required|email"
              validation-name="Email"
              v-model="email"
              placeholder="E-mail"
              :wrapper-class="['input-wrapper']"
          />
        </div>
        <div class="col-md-6 col-12">
          <label class="black">Phone</label>
          <FormulateInput
              type="text"
              validation="required"
              validation-name="Phone"
              v-model="phone"
              placeholder="Your phone number"
              :wrapper-class="['input-wrapper']"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-12 form-item">
          <label class="black">Message</label>
          <FormulateInput
              type="textarea"
              validation-name="Message"
              v-model="message"
              placeholder="Enter your Message"
              :wrapper-class="['input-wrapper']"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-12">
          <FormulateInput
              type="checkbox"
              validation="required"
              validation-name="Privacy Policy"
              v-model="acceptMkt"
              label="I agree to the Terms & Conditions and Privacy Policy of MeetSales"
              :wrapper-class="['checkbox-wrapper']"
          />
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="custom-btn-wrapper center">
        <button type="submit" class="custom-btn contacts">Send</button>
      </div>
    </div>
    <div class="form-message-response-wrapper message-sucess" v-if="showMessage && submitted">
      <p>{{ successMessage }}</p>
    </div>
    <div class="form-message-response-wrapper message-error" v-else-if="showMessage">
      <p>{{ successMessage }}</p>
    </div>
  </FormulateForm>
</template>
<script>
export default  {
  name:'ContactsForm',
  data() {
    return {
      values: {},
      errors: [],
      submitted: false,
      showMessage: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      message: '',
      acceptMkt: '',
      successMessage: '',
    };
  },
  methods: {
    resetContactsHandler() {
      this.$formulate.reset('contact-form-page');
      this.firstName = '';
      this.email = '';
      this.phone = '',
      this.message = '';
      this.acceptMkt = '';
      this.successMessage = '';
      this.showMessage = false;
      this.submitted=false;
    },
    submitContactsHandler() {
      const idForm = 1;
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      const requestBody = {
        firstName: this.firstName,
        email: this.email,
        phone: this.phone,
        message: this.message,
        acceptMkt: this.acceptMkt,
      };


      this.$http.post(process.env.VUE_APP_API_URL + 'forms/' + idForm, qs.stringify(requestBody), config)
          .then((response) => {
            if (response.data.success) {
              this.successMessage = response.data.message;
              this.showMessage = true;
              this.submitted = true;
            }
          })
          .catch((e) => {
            this.errors.push(e);
            this.showMessage = true;
            this.successMessage = response.data.message;
          })
          .finally((e) => {
            this.$formulate.resetValidation('contact-form-page');
            setTimeout(this.resetContactsHandler,3000);
          })
    },
  },
}
</script>
