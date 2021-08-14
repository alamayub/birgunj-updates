<template>
  <v-navigation-drawer mobile-breakpoint="10024" color="primary" dark v-model="drawer" width="230" app>
    <v-list expand nav tile>
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="(item, i) in items" :key="i" :to="`${item.to}`">
          <v-list-item-icon class="mx-3">
            <v-icon size='20' v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name" style="letter-spacing: 1px;" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>  
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { name: 'Home', to: '/', icon: 'mdi-home-outline' },
      { name: 'News', to: '/news', icon: 'mdi-newspaper' },
      { name: 'Blogs', to: '/blogs', icon: 'mdi-post' },
      { name: 'About Us', to: '/about', icon: 'mdi-information-outline' },
      { name: 'Contact', to: '/contact', icon: 'mdi-account-box-outline' },
    ]
  }),
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('SET_DRAWER', val)
      },
    },
  }
}
</script>