<template>
  <div>
    <v-container>
      <div class="contact">
        <div class="contact__info">
          <div class="display-1">Contact Us</div>
          <div style="line-height: 1;">
            <small>Feel free to contact us anytime. We'll get back to you as sson as possible.</small>
          </div>
          <div class="mt-3">
            <div v-for="(contact, c) in contacts" :key="c">
              <v-icon>{{ contact.icon }}</v-icon>
              <span class="ml-2" v-text="contact.title" />
            </div>
          </div>
          <div class="title mt-5 mb-1">Connect With Us</div>
          <div class="d-flex flex-wrap" style="grid-gap: 12px;">
            <v-btn v-for="(social, s) in socials" :key="s" color="primary" target="_blacnk" :href="social.to">
              <v-icon left>{{ social.icon }}</v-icon>
              <span style="text-transform: capitalize !important; font-weight: 400 !important;">{{ social.title }}</span>
            </v-btn>
          </div>
        </div>
        <v-form v-model="valid" lazy-validation ref="form" class="form pa-3 pa-sm-5 pa-md-7 pa-lg-9">
          <div class="mb-5">
            <div class="title mb-1" style="line-height: 1;">Send Us Message</div>
            <div style="line-height: 1;"><small>We'll contact you as soon as possible.</small></div>
          </div>
          <v-text-field v-model="user.name" label="Full Name*" dense outlined hide-details :rules="[ v => !!v || '' ]" />
          <v-text-field v-model="user.mobile" type="number" label="Mobile Number*" dense outlined hide-details :counter="10" :rules="mobileRules" />
          <v-text-field v-model="user.email" label="Email*" dense outlined hide-details :rules="emailRules" />   
          <v-textarea v-model="user.message" label="Your Message..." dense outlined hide-details />
          <v-btn color="primary" max-width="200" :disabled="!valid" @click.stop="sendMessage" rounded>
            <span style="text-transform: capitalize !important;">send message</span>
          </v-btn>         
        </v-form>
      </div>
    </v-container>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.482279355477!2d84.87663421500014!3d27.01492238308371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935440af3b59e3%3A0x5aa0411733213e6a!2sBirgunj%20Ghanta%20Ghar!5e0!3m2!1sen!2snp!4v1629135428021!5m2!1sen!2snp" style="border:0;" allowfullscreen="" loading="lazy" />
    </div>
  </div>  
</template>

<script>
export default {
  data: () => ({
    valid: true,
    user: {
      name: null,
      mobile: '',
      email: null,
      message: null  
    },
    mobileRules: [
      v => !!v || 'Mobile Number is required.', 
      v => v.length == 10 || 'Mobile Number should be 10 digits.'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    socials: [
      { icon: 'mdi-facebook', title: 'Facebook', to: 'https://www.facebook.com' },
      { icon: 'mdi-twitter', title: 'Twitter', to: 'https://www.twitter.com' },
      { icon: 'mdi-youtube', title: 'YouTube', to: 'https://www.youtube.com' },
      { icon: 'mdi-instagram', title: 'Instagram', to: 'https://www.instagram.com' }
    ],
    contacts: [
      { icon: 'mdi-map-marker', title: 'Panitanki-10, Birgunj' },
      { icon: 'mdi-email', title: 'contact@birgunjupdates.com' },
      { icon: 'mdi-phone-classic', title: '01450000' },
      { icon: 'mdi-cellphone', title: '+9779876543210' },
    ],
  }),
  methods: {
    sendMessage() {
      if(this.$refs.form.validate()) console.log('validated')
      else console.log('not validated')
    }
  }
}
</script>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  grid-gap: 12px;
}
.form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  grid-gap: 12px;
  align-content: center;
  box-shadow: 0 1px 15px 0 rgb(0 0 0 / 10%); 
  border-radius: 4px; 
  min-height: 70vh;
}
@media (max-width: 760px) {
  .contact { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
.map {
  height: 50vh;
  overflow: hidden;
}
iframe { 
  height: 100%;
  width: 100%;
}
</style>