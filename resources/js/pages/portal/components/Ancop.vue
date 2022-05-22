<template>
  <div class="my-5 my-sm-8">
    <v-card
      class="d-flex flex-column flex-md-row align-md-center justify-space-between pa-6"
      color="#F2F4F7"
      width="100%"
      elevation="0"
    >
      <div class="ancop__img">
        <v-img
          :src="bannerSrc"
          :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '400px'"
          :max-height="$vuetify.breakpoint.smAndDown ? '100%' : '230px'"
        />
      </div>

      <div class="ancop__info px-0 px-md-9 mt-9 mt-md-0">
        <div class="ancop__info-title">
          Give a gift to someone in need
        </div>
        <div class="ancop__info-subtitle mt-2 mb-4">
          Donate to ANCOP to provide education, shelter, and healthcare to the poor.
          You can donate through a one time donation or through ANCOP’s programs. 
        </div>
        <v-btn
          class="ancop__info-btn"
          height="50px"
          width="175px"
          color="#444CE7"
          @click="redirectToAncop"
        >
          Donate to ANCOP
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Ancop',

  data () {
    return {
      bannerSrc: '/images/ancop.png'
    }
  },

  methods: {
    redirectToAncop () {
      const ancopLink = "https://ancopcanada.org/"
      window.open(ancopLink, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
.ancop {
  &__img {
  }

  &__info {
    &-title {
      font-size: 30px;
      line-height: 38px;
      font-weight: 500;

      @media only screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 32px;
      }
    }

    &-subtitle {
      font-size: 20px;
      line-height: 30px;
      font-weight: 400;
    }

    &-btn {
      text-transform: capitalize;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: #fff
    }
  }
}
</style>
