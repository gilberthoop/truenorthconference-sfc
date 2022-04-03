<template>
  <div class="agenda d-flex flex-column flex-lg-row justify-space-between">
    <div class="agenda__header mb-0 mb-md-14">
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

    <div class="d-flex flex-column flex-md-row">
    <v-card
      v-for="(agenda, index) in agendas"
      :key="index"
      class="agenda__card pa-7 ml-0 mx-md-auto ml-lg-8 mt-8 mt-md-0 d-flex flex-column justify-space-between"
      color="#1D2939"
      :width="$vuetify.breakpoint.smAndDown ? '100%' : '278px'"
      :height="$vuetify.breakpoint.smAndDown ? '100%' : '597px'"
    >
      <div class="agenda__card--upper">
        <div class="agenda__card-date">
          <span
            v-if="$vuetify.breakpoint.smAndDown"
          >
            {{ agenda.day }}
          </span>
          {{ agenda.date }}
        </div>
        <div class="agenda__card-title font-weight-medium">
          {{ agenda.title }}
        </div>
      </div>
      <div class="agenda__card--lower">
        <v-img
          v-if="$vuetify.breakpoint.mdAndUp"
          class="my-7"
          :src="agenda.image"
          height="222"
          width="214"
        >
        </v-img>
        <div class="agenda__card-description">
          {{ agenda.description }}
        </div>
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
          image: '/images/agenda/workshop.png',
          description: 'Engaging & authentic conversations featuring eleven workshop presenters.'
        },
        {
          day: 'Wednesday,',
          date: 'May 25, 2022',
          title: 'Competitions',
          image: '/images/agenda/competitions.png',
          description: 'Participate with your friends in various creative, sports, and fun competitions.'
        },
        {
          day: 'Saturday,',
          date: 'May 28 - May 29, 2022',
          title: 'Main Conference',
          image: '/images/agenda/conference.png',
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
    margin: 50px 20px;
  }

  &__header {
    margin-right: 60px;

    @media only screen and (max-width: 1260px) {
      margin-right: auto;
      margin-left: auto;
      text-align: center;
    }

    @media only screen and (max-width: 960px) {
      margin: 0;
      text-align: left;
    }

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
</style>