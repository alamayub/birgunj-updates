<template>
  <v-app>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="50" />
    </v-overlay>
    <Navbar />
    <Sidebar />
    <v-main>
      <keep-alive>
        <router-view :key="$route.fullPath" />
      </keep-alive>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Navbar, Sidebar, Footer },
  computed: {
    overlay() {
      return this.$store.state.overlay
    }
  }
};
</script>

<style>
* { text-decoration: none; }
html { scroll-behavior: smooth; }
.container { 
  max-width: 1250px !important; 
  margin-right: auto;
  margin-left: auto;
  padding: 12px;
}

/* Text Fields */
.v-text-field--filled.v-input--dense.v-text-field--single-line > .v-input__control > .v-input__slot, 
.v-text-field--filled.v-input--dense.v-text-field--outlined > .v-input__control > .v-input__slot, 
.v-text-field--filled.v-input--dense.v-text-field--outlined.v-text-field--filled > .v-input__control > .v-input__slot, 
.v-text-field--full-width.v-input--dense.v-text-field--single-line > .v-input__control > .v-input__slot, 
.v-text-field--full-width.v-input--dense.v-text-field--outlined > .v-input__control > .v-input__slot, 
.v-text-field--full-width.v-input--dense.v-text-field--outlined.v-text-field--filled > .v-input__control > .v-input__slot, 
.v-text-field--outlined.v-input--dense.v-text-field--single-line > .v-input__control > .v-input__slot, 
.v-text-field--outlined.v-input--dense.v-text-field--outlined > .v-input__control > .v-input__slot, 
.v-text-field--outlined.v-input--dense.v-text-field--outlined.v-text-field--filled > .v-input__control > .v-input__slot {
  border-radius: 0 !important;
}
.v-input input { font-size: 13px !important; }
.v-input .v-label { font-size: 13px !important; }
.v-input__icon { height: 18px !important; }
.v-input__icon .v-icon.v-icon, .v-select-list .v-icon.v-icon { font-size: 18px !important; }
.v-text-field--outlined.v-input--is-focused fieldset { border: 1px solid #1976d2 !important; }
.v-text-field--outlined.v-input--has-state fieldset { border: 1px solid #ff5252 !important; }

/* Number type spin wheels */
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>