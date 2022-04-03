<template>
  <div class="home d-flex flex-column">
    <!-- Header section -->
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

    <!-- MVP sections -->
    <Introduction />

    <Join />

    <Testimony />

    <Agenda />

    <FAQ />

    <v-spacer />

    <!-- Footer section -->
    <AppFooter />
  </div>
</template>

<script>
import Banner from '../components/header/Banner'
import AppToolBar from '../components/header/AppToolBar'
import AppFooter from '../components/footer/AppFooter'
import Introduction from '../components/mvp/Introduction'
import Join from '../components/mvp/Join'
import Agenda from '../components/mvp/Agenda'
import FAQ from '../components/mvp/FAQ'
import Testimony from '../components/mvp/Testimony'

export default {
  name: 'Home',

  components: {
    Banner,
    AppToolBar,
    AppFooter,
    Introduction,
    Join,
    Agenda,
    FAQ,
    Testimony
  },

  computed: {
    noToolBarMenu () {
      return this.$route.name === 'register' || this.$route.name === 'login' || this.$route.name === 'participants'
    },
  }
}
</script>
