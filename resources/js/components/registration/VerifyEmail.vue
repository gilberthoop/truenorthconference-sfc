<template>
  <div class="registration">
    <div class="registration__left-panel">
      <div
        class="tnc-logo"
        @click="redirectToHomePage"
      >
        <LogoBlackAndRed />
      </div>

      <div class="registration__title mb-10">
        Thank you!
      </div>

      <div class="registration__subtitle">
        <!-- We have sent a message to
        <span class="registration__email">
          {{ email }}
        </span>
        with a link to verify your email and registration. -->
        You may log in anytime to access the True North Conference Portal.
      </div>
      
      <!-- <AppFlowNavButtons
        :show-back="false"
        continue-text="Back to home page"
        @continue="continueHandler"
      /> -->
      <AppFlowNavButtons
        :show-back="true"
        back-text="Home"
        continue-text="Log in now"
        @back="$router.push('/')"
        @continue="$router.push('login')"
      />
    </div>
  </div>
</template>

<script>
import AppFlowNavButtons from '../../components/AppFlowNavButtons'
import LogoBlackAndRed from '../../components/icons/LogoBlackAndRed'
import AuthMixin from '../../mixins/auth-mixin'

export default {
  name: 'VerifyEmail',

  mixins: [AuthMixin],

  components: {
    AppFlowNavButtons,
    LogoBlackAndRed
  },

  methods: {
    continueHandler () {
      this.step = 0
      this.$store.commit('setEmail', null)
      this.$store.commit('setPassword', null)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
.registration {
  font-family: "Outfit", sans-serif;
  line-height: 32px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  text-align: center;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }

  &__left-panel {
    margin: 120px auto;
    padding: 30px 0;
    max-width: 600px;

    @media only screen and (max-width: 600px) {
      margin: 50px 20px;
      padding: 25px 15px;
    }
  }

  &__title {
    font-size: 40px;
    font-weight: 500;
    color: #101828;

    @media only screen and (max-width: 600px) {
      margin-top: 60px;
    }
  }

  &__subtitle {
    font-size: 20px;
  }

  &__email {
    color: #2D31A6 !important;
  }
}

.tnc-logo {
  position: absolute;
  top: 35px;
  left: 40px;
  cursor: pointer;
}
</style>