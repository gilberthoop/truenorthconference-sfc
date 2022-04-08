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

    <Theme />

    <Testimony />

    <Agenda />

    <Workshop />

    <FAQ />

    <RegisterNow />

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
import RegisterNow from '../components/mvp/RegisterNow'
import Theme from '../components/mvp/Theme'
import Workshop from '../components/mvp/Workshop'

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
    Testimony,
    RegisterNow,
    Theme,
    Workshop
  },

  computed: {
    noToolBarMenu () {
      return this.$route.name === 'register' || this.$route.name === 'login' || this.$route.name === 'participants'
    },
  }
}
</script>
