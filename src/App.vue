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
</style>