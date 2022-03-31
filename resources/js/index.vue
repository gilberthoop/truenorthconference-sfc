<template>
  <v-app class="app">
    <div class="d-flex flex-column-reverse flex-md-column">
      <Banner
        v-if="!noToolBarMenu"
      />
      <div>
        <AppToolBar
        v-if="!noToolBarMenu"
        />
      </div>
    </div>
  
    <router-view></router-view>
  </v-app>
</template>

<script>
import Banner from './components/Banner'
import AppToolBar from './components/AppToolBar'

export default {
  name: 'Index',

  components: {
    Banner,
    AppToolBar
  },

  computed: {
    noToolBarMenu () {
      return this.$route.name === 'register' || this.$route.name === 'login' || this.$route.name === 'participants'
    },
  }
}
</script>

<style scoped lang="scss">
.app {
  background-color: #121A2E;
}
</style>