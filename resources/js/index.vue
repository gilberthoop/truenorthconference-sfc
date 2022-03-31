<template>
  <v-app class="app">
    <AppToolBar
      v-if="!noToolBarMenu"
    />
    <router-view></router-view>
  </v-app>
</template>

<script>
import AppToolBar from './components/AppToolBar'

export default {
  name: 'Index',

  components: {
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
}
</style>