<template>
  <v-card
    class="theme d-flex flex-column flex-md-row justify-space-around align-center"
    width="100%"
    height="auto"
    color="#1D2939"
  >
    <v-img
      :src="themeImgSrc"
      :max-width="$vuetify.breakpoint.xsOnly ? '255px' : '483px'"
      :max-height="$vuetify.breakpoint.xsOnly ? '255px' : '483px'"
    />
    <div class="theme__info">
      <div class="theme__info--gradient">
        Theme for 2022
      </div>

      <div class="theme__info-title mt-3">
       In Christ
      </div>

      <div class="theme__info-subtitle">
        “If then my people, upon whom my name has been pronounced,
        humble themselves and pray,and seek my face and turn from their evil ways,
        I will hear them from heaven and pardon their sins and heal their land.”
        <br/><br/>
        (2 Chronicles 7:14 NRSCVE)
      </div>
      
      <div class="theme__info-description my-5">
        In moments of crisis, we need to remember three things: who God is, who we are,
        and that Christ draws us into Himself.
        <br/><br/>
        <strong>In Christ</strong> is a conference focused on the journey that began with Christ first.
        It is a journey rooted in Christ and with healing through Him. 
      </div>

      <!-- <v-btn
        class="theme__info-button text-capitalize"
        width="auto"
        height="60px"
        color="#444CE7"
        @click="redirectToRegistration"
      >
        Register now
      </v-btn> -->
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Theme',

  data () {
    return {
      themeImgSrc: '/images/theme/theme.webp'
    }
  },

  methods: {
    redirectToRegistration () {
      // this.$router.push('register')
    }
  }
}
</script>

<style scoped lang="scss">
.theme {
  min-height: 100vh;
  margin: 100px 0;
  padding-left: 80px;
  padding-right: 80px;

  @media only screen and (max-width: 960px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media only screen and (max-width: 600px) {
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 30px;
    padding-right: 30px;
  }

  &__info {
  font-family: "Outfit", sans-serif;
  max-width: 585px;

  @media only screen and (max-width: 960px) {
    margin-top: 60px;
  }

    &--gradient {
      font-size: 18px;
      line-height: 28px;
      font-weight: 700;
      background: linear-gradient(90deg, #444CE7 0%, #9E77ED 30%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &-title {
      color: #fff;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
    }

    &-subtitle {
      color: #8098F9;
      font-size: 16px;
      line-height: 24px;
    }

    &-description {
      color: #fff;
      font-size: 20px;
    }

    &-button {
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>