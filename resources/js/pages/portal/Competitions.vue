<template>
  <v-app>
    <AppHeader />
  
    <div class="competitions mx-6 mx-sm-9 mx-md-16">
      <div class="competitions__title">
        Competitions
      </div>

      <div class="competitions__body d-flex flex-column flex-md-row">
        <v-card
          class="competitions__card-1 pa-6 pa-sm-10 mt-6 mr-md-3"
          color="#EEF4FF"
          elevation="0"
        >
          <div class="competitions__event-heads my-3">
            <v-img
              :src="competitionHeads"
              class="mb-3"
              height="50"
              width="70"
            />
            Message from Competition Heads
          </div>

          <div class="competitions__card-1--title">
            Competitions are different this year
          </div>

          <div class="competitions__card-1--subtitle my-4">
            Our Competitions committee is still preparing this year’s competition guidelines. Stay tuned for the guidlines!
          </div>
        </v-card>

        <v-card
          class="competitions__card-2 pa-8 mt-6 ml-md-3"
          color="#fff"
          elevation="0"
          height="100%"
          max-width="100%"
        >
          <div class="competitions__card-2--title mb-6">
          </div>
        </v-card>
      </div>
    </div>

    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from '../../components/header/AppHeader'
import AppFooter from '../../components/footer/AppFooter'

export default {
  name: 'Competition',

  components: {
    AppHeader,
    AppFooter
  },

  data () {
    return {
      competitionHeads: '/images/competition-head.png'
    }
  }
}
</script>

<style scoped lang="scss">
.competitions {
  font-family: "Outfit", sans-serif;
  color: black;
  margin-top: 150px;
  margin-bottom: 320px;

  &__title {
    font-size: 72px;
    font-weight: 700;
    line-height: 90px;

    @media only screen and (max-width: 960px) {
      font-size: 62px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 36px;
      line-height: 44px;
    }
  }

  &__event-heads {
    color: #6172F3;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500px;
  }

  &__card-1 {
    max-width: 832px;

    @media only screen and (max-width: 960px) {
      max-width: 100%;
    }

    &--title {
      font-size: 36px;
      line-height: 44px;
      font-weight: 500px;

      @media only screen and (max-width: 600px) {
        font-size: 30px;
        line-height: 38px;
      }
    }

    &--subtitle {
      font-size: 20px;
      line-height: 30px;

      @media only screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  &__card-2 {
    &--title {
      font-size: 30px;
      line-height: 38px;
      font-weight: 500px;

      @media only screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 32px;
      }
    }

    &--subtitle {
      font-size: 20px;
      line-height: 30px;

      @media only screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}

::v-deep .v-footer {
  position: absolute;
  bottom: 0;
}
</style>