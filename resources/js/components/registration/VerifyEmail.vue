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
        We have sent you an email at
        <span class="registration__email">
          {{ email }}
        </span>
        for verification
      </div>
    </div>
  </div>
</template>

<script>
import LogoBlackAndRed from '../../components/icons/LogoBlackAndRed'
import AuthMixin from '../../mixins/auth-mixin'

export default {
  name: 'VerifyEmail',

  mixins: [AuthMixin],

  components: {
    LogoBlackAndRed
  }
}
</script>

<style scoped lang="scss">
.registration {
  font-family: "Outfit", sans-serif;
  line-height: 44px;
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
    max-width: 900px;

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