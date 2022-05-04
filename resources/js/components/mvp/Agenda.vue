<template>
  <div class="agenda">
    <div
      id="agenda"
      class="anchor">
    </div>

    <div class="agenda__header mb-0 mb-md-4">
      <div class="agenda__header-title mb-4 mb-md-7">
        Agenda
      </div>
      <div class="agenda__header-contents mb-5 mb-md-8">
        We have a schedule filled with lots of fun, fellowship, and moments to grow in your faith.
      </div>
      <v-btn
        class="registration__btn--gradient text-capitalize"
        width="auto"
        height="60"
        @click="redirectToRegistration"
      >
        Register for 2022
      </v-btn>
    </div>
  
    <div class="d-flex flex-column">
      <div class="d-flex flex-column flex-md-row justify-space-between">
        <v-card
          class="agenda__card pa-5 mt-9 mr-0 mr-md-4"
          color="#1D2939"
          width="100%"
          height="100%"
        >
          <div class="agenda__card-date">
            Friday May 27 - Saturday, May 28, 2022 
          </div>
          <div class="agenda__card-title font-weight-medium">
            Competitions
          </div>
          <div class="agenda__card-description mb-2">
            Participate in the various creative and fun competitions! Creative competitions submissions due May 20, 2022.
          </div>
        </v-card>

        <v-card
          class="agenda__card pa-5 mt-9 ml-0 ml-md-4"
          color="#1D2939"
          width="100%"
          height="100%"
        >
          <div class="agenda__card-date">
            Friday, May 27 - Saturday, May 28, 2022
          </div>
          <div class="agenda__card-title font-weight-medium">
            Main Conference
          </div>
          <div class="agenda__card-description mb-2">
            2-day online stream featuring our key note speakers, praise and worship and more.
          </div>
        </v-card>
      </div>

      <v-card
        class="agenda__card pa-5 mt-9"
        color="#1D2939"
        width="100%"
        height="100%"
      >
        <div class="agenda__card-date">
          Wednesday, June 1, 2022 @ 8PM EDT
        </div>
        <div class="agenda__card-title font-weight-medium">
          Workshops
        </div>
        <div class="agenda__card-description mb-2">
          Engaging & authentic conversations featuring eleven workshop presenters.
        </div>
      </v-card>
    </div>
</div>
</template>

<script>
export default {
  name: 'Agenda',

  data () {
    return {
      agendas: [
        {
          day: 'Saturday,',
          date: 'May 21, 2022',
          title: 'Workshops',
          description: 'Engaging & authentic conversations featuring eleven workshop presenters.'
        },
        {
          day: 'Wednesday,',
          date: 'May 25, 2022',
          title: 'Competitions',
          description: 'Participate with your friends in various creative, sports, and fun competitions.'
        },
        {
          day: 'Friday,',
          date: 'May 27 - Saturday, May 28, 2022',
          title: 'Main Conference',
          description: ' 2-day online stream featuring our key note speakers, praise and worship and more.'
        }
      ]
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
.agenda {
  font-family: "Outfit", sans-serif;
  color: #fff;
  position: relative;
  margin: 120px 80px;

  @media only screen and (min-width: 600px) and (max-width: 960px) {
    margin: 70px 40px;
  }

  @media only screen and (max-width: 600px) {
    margin: 60px 20px;
  }

  &__header {
    &-title {
      font-size: 72px;
      font-weight: 700;
      line-height: 90px;

      @media only screen and (max-width: 600px) {
        font-size: 36px;
        line-height: 44px;
      }
    }

    &-contents {
      font-size: 20px;
      line-height: 30px;
    }
  }

  &__card {
    border-radius: 13px;
    color: #fff;
    
    &-date {
      font-size: 18px;
      font-weight: 700;
      line-height: 28px;
      background: linear-gradient(90deg, #444CE7 0%, #9E77ED 50%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &-title {
      font-size: 36px;
      line-height: 44px;
      margin-top: 14px;
      margin-bottom: 7px;

      @media only screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 32px;
        margin-top: 20px;
      }
    }

    &-description {
      font-size: 20px;
      line-height: 30px;
      font-weight: 400;

      @media only screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 24px;
      }
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

.anchor {
  display: block;
  position: relative;
  top: -100px;
  visibility: hidden;
}
</style>