<template>
<div>
  <div class="panel d-flex flex-column flex-md-row justify-center justify-md-space-between">
    <div class="panel-left">
      <div class="panel-left__title mb-8 mr-0 mr-md-16">
        Join SFC's biggest event in Canada
      </div>
      <v-btn
        class="registration__btn--gradient mx-3 mb-12 mb-md-0 text-capitalize"
        width="auto"
        height="60"
        @click="redirectToRegistration"
      >
        Register for 2022
      </v-btn>
    </div>
    <div class="panel-right d-flex flex-column">
      <v-card
        class="card pa-7 mb-12"
        :width="$vuetify.breakpoint.mdAndUp ? '621px' : '100%'"
        :height="$vuetify.breakpoint.mdAndUp ? '228px' : '100%'"
        color="#1D2939"
      >
        <span class="card__item--gradient">01</span>
        <div class="card__title font-weight-medium mt-7">
          Encounter
        </div>
        <div class="card__message">
          An opportunity to encounter Him in ways you never have before.
          How is the Lord calling you?
        </div>
      </v-card>
      
      <v-card
        class="card pa-7 mb-12"
        :width="$vuetify.breakpoint.mdAndUp ? '621px' : '100%'"
        :height="$vuetify.breakpoint.mdAndUp ? '228px' : '100%'"
        color="#1D2939"
      >
        <span class="card__item--gradient">02</span>
        <div class="card__title font-weight-medium mt-7">
          Connect
        </div>
        <div class="card__message">
          Listen to inspiring testimonies about the True, Good and
          Beautiful from our brothers and sisters in Christ.
        </div>
      </v-card>

      <v-card
        class="card pa-7 mb-12"
        :width="$vuetify.breakpoint.mdAndUp ? '621px' : '100%'"
        :height="$vuetify.breakpoint.mdAndUp ? '228px' : '100%'"
        color="#1D2939"
      >
        <span class="card__item--gradient">03</span>
        <div class="card__title font-weight-medium mt-7">
          Respond
        </div>
        <div class="card__message">
          Strengthen your relationship with Jesus and
          spread the Good News wherever you are.
        </div>
      </v-card>
    </div>
  </div>

  <div class="mb-10">
    <Marquee
      :image="lineImgSrc"
      width="100vw"
      height="2px"
    />
    <Marquee
      class="my-1"
      :image="tncBannerImgSrc"
      width="100vw"
      height="50px"
    />
    <Marquee
      :image="lineImgSrc"
      width="100vw"
      height="2px"
    />
  </div>
</div>
</template>

<script>
import Marquee from '../../components/animation/Marquee'

export default {
  name: 'Join',

  components: {
    Marquee
  },

  data () {
    return {
      lineImgSrc: '/images/banner/line-1.png',
      tncBannerImgSrc: '/images/banner/content.png'
    }
  },

  methods: {
    redirectToRegistration () {
      this.$router.push('register')
    }
  }
}
</script>

<style scoped lang="scss">
.panel {
  font-family: "Outfit", sans-serif;
  color: #fff;
  position: relative;
  margin: 120px 80px;

  @media only screen and (min-width: 600px) and (max-width: 960px) {
    margin: 70px 40px;
  }

  @media only screen and (max-width: 600px) {
    margin: 50px 20px;
  }

  &-left {
    &__title {
      font-weight: 700;
      font-size: 72px;
      line-height: 90px;
    }
  }
}

.registration {
  &__btn {
    &--gradient {
      color: #fff !important;
      background: linear-gradient(90deg, #444CE7 0%, #9E77ED 100%);
      border-radius: 8px;
      font-size: 18px;
      font-weight: 500;
    }
  }
}

.card {
  color: #fff !important;
  border-radius: 24px;

  &__item {
    &--gradient {
      font-weight: 700;
      font-size: 18px;
      background: linear-gradient(90deg, #444CE7 0%, #9E77ED 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__title {
    font-size: 36px;
    line-height: 44px;

    @media only screen and (max-width: 600px) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  &__message {
    font-size: 20px;
    line-height: 30px;

    @media only screen and (max-width: 600px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>