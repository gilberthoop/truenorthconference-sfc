<template>
  <v-app class="app">
    <div class="d-flex flex-column">
      <div>
        <AppToolBar
        v-if="!noToolBarMenu"
        />
      </div>
      <Banner
        v-if="!noToolBarMenu"
      />
    </div>

    <Introduction />

    <v-spacer />

    <AppFooter />
  
    <router-view></router-view>
  </v-app>
</template>

<script>
import Banner from './components/header/Banner'
import AppToolBar from './components/header/AppToolBar'
import AppFooter from './components/footer/AppFooter'
import Introduction from './components/mvp/Introduction'

export default {
  name: 'Index',

  components: {
    Banner,
    AppToolBar,
    AppFooter,
    Introduction
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