<template>
  <v-app>
    <AppHeader />

    <div class="workshops mb-12 mx-6 mx-sm-9 mx-md-16">
      <div class="workshops__title">
        Workshops
      </div>

      <div class="workshops__body d-flex flex-column flex-md-row">
        <v-card
          class="workshops__card-1 pa-6 pa-sm-10 mt-6 mr-md-3"
          color="#EEF4FF"
          elevation="0"
        >
          <div class="workshops__event-heads my-3">
            <v-img
              :src="workshopHeads"
              class="mb-3"
              height="50"
              width="90"
            />
            Message from Workshop Heads
          </div>

          <div class="workshops__card-1--title">
            Area you ready for workshops?
          </div>

          <div class="workshops__card-1--subtitle my-4">
            Thanks for signing up for a workshop! We’ll release more information on how to access Workshops closer to the date.
          </div>
        </v-card>

        <v-card
          class="workshops__card-2 pa-8 mt-6 ml-md-3"
          color="#fff"
          elevation="0"
          height="100%"
          max-width="100%"
        >
          <div class="workshops__card-2--title mb-6">
          </div>
        </v-card>
      </div>

      <div class="workshops__content mt-14">
        <div class="workshops__content--title text-left text-md-center">
          This year's workshops
        </div>

        <div class="workshops__grid mt-9">
          <v-card
            v-for="(workshop, index) in workshops"
            :key="index"
            color="#EEF4FF"
            elevation="0"
            width="auto"
            height="auto"
            class="workshops__grid-item"
          >
            <div class="workshops__grid-item--theme">
              {{ workshop.theme }}
            </div>

            <div class="workshops__grid-item--title mb-4">
              {{ workshop.title }}
            </div>

            <div class="workshops__grid-item--description">
              {{ workshop.description }}
            </div>
          </v-card>
        </div>
      </div>
    </div>

    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from '../../components/header/AppHeader'
import AppFooter from '../../components/footer/AppFooter'

export default {
  name: 'Workshops',

  components: {
    AppHeader,
    AppFooter
  },

  data () {
    return {
      workshopHeads: '/images/workshop-heads.png',
      workshops: [
        {
          theme: 'Deepening Prayer Life',
          title: 'Avoiding Dead Air',
          description: 'In this session, participants will be invited to take stock of the quality of their prayer life. They will be explore ways to recognize and overcome spiritual dryness, and to deepen their personal relationship with God.'
        },
        {
          theme: 'Lifestyle',
          title: 'Effective Bandwidth',
          description: 'In this session, participants will explore the common phases modern-day singles go through in life and the relative actions and behaviour exhibited during these phases.'
        },
        {
          theme: 'Conflict Resolution',
          title: 'Dealing with Distortion',
          description: 'In this session, participants will learn how to navigate conflicts in various types of relationships (friends, family members, co-workers, etc). They will be presented with concrete ways to manage and resolve them, and to bring about stronger and healthier relationships.'
        },
        {
          theme: 'Character',
          title: 'High Definition Faith',
          description: 'In this session, participants will unpack the character of resilience, and how it is plays an important role in facing challenges and obstacles in life. They will explore ways to arrive at triumph while in difficult situations and in life’s many heartbreaks'
        },
        {
          theme: 'Media Literacy',
          title: 'Navigating the Noise',
          description: 'This session elaborates the difficulties of navigating information coming from various media sources (e.g new, social, television, etc). Participants will be given tips on how to process information in a sound way, and how to maintain a healthy social-emotional state in this digital noise.'
        },
        {
          theme: 'Healing',
          title: 'Healing Harmonic',
          description: 'This session will unpack the basics of inner healing through the lens of Theology of the Body. Participants will be given tools and advice on how to bring forth healing of wounds from past hurts, and to help them move forward, find wholeness, and live fully.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.workshops {
  font-family: "Outfit", sans-serif;
  color: black;
  margin-top: 150px;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 28px;

    @media only screen and (max-width: 1060px) {
      display: flex;
      flex-direction: column;
    }
  }

  &__grid-item {
    padding: 24px;

    &--theme {
      font-size: 18px;
      line-height: 28px;
      font-weight: 700;
      color: #6172F3
    }

    &--title {
      font-size: 30px;
      line-height: 38px;
      font-weight: 700;

      @media only screen and (max-width: 600px) {
        font-size: 20px;
        line-height: 30px;
      }
    }

    &--description {
      font-size: 18px;
      line-height: 28px;
      color: #475467;
    }
  }

  &__content {
    margin-bottom: 150px;

    @media only screen and (max-width: 960px) {
      margin-bottom: 280px;
    }
  
    &--title {
      font-size: 48px;
      font-weight: 700;
      line-height: 60px;

      @media only screen and (max-width: 600px) {
        font-size: 30px;
        line-height: 38px;
      }
    }
  }

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

    @media only screen and (max-width: 1060px) {
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