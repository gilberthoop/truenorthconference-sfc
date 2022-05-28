<template>
  <v-app>
    <AppHeader/>
  
    <div class="portal-home mb-12 mx-6 mx-sm-9 mx-md-16">
      <div class="d-flex justify-center mb-14">
        <MyVideoStream />
      </div>

      <div class="portal-home__title">
        Welcome to TNC 2022
      </div>

      <div class="portal-home__cards d-flex justify-space-between flex-column flex-md-row">
          <v-card
            class="portal-home__card-1 pa-6 pa-sm-10 mt-6 mr-md-3"
            color="#EEF4FF"
            elevation="0"
          >
            <div class="portal-home__event-heads my-3">
              <v-img
                :src="eventHeads"
                class="mb-3"
                height="40"
                width="68"
              />
              Message from event heads
            </div>

            <div class="portal-home__card-1--title">
              We're glad you're here!
            </div>

            <div class="portal-home__card-1--subtitle my-4">
              Thank you for registering for this year’s True North Conference.
              We are eagerly preparing for our upcoming weekend. Make sure you tune in on May 27-28, 2022.
              <br/> <br/>
              This year’s theme is In Christ.
              As we prepare for conference, we invite you to meditate on our anchor verse:
            </div>

            <div class="bible-verse d-flex align-center mb-3 mt-8">
              <v-divider
                class="bible-verse__divider"
                vertical
              />
              <div class="ml-6">
                <v-icon
                  medium
                  color="#444CE7"
                  class="mb-4"
                >
                  auto_stories
                </v-icon>
                <br/>
                “If then my people, upon whom my name has been pronounced, humble themselves and pray,
                and seek my face and turn from their evil ways, I will hear them from heaven and pardon their sins and heal their land.”
                <br/><br/>
                (2 Chronicles 7:14 NRSCVE)
              </div>
            </div>
          </v-card>

          <v-card
            class="portal-home__card-2 pa-8 mt-6 ml-md-3"
            color="#F2F4F7"
            elevation="0"
            height="100%"
          >
            <div class="portal-home__card-2--title mb-6">
              Key reminders
            </div>
            <div class="portal-home__card-2--subtitle">
              <div
                v-for="(reminder, index) in reminders"
                :key="index"
                class="mt-4 d-flex align-start"
              >
                <v-icon
                  medium
                  color="#444CE7"
                >
                  task_alt
                </v-icon>
                <div class="ml-2">
                  {{ reminder }}
                </div>
              </div>
            </div>

            <div class="portal-home__card-2--title mt-7 mb-6">
              House Rules
            </div>
            <div class="portal-home__card-2--subtitle">
              <div
                v-for="(rule, index) in rules"
                :key="index"
                class="mt-4 d-flex align-start"
              >
                <v-icon
                  medium
                  color="#444CE7"
                >
                  task_alt
                </v-icon>
                <div class="ml-2">
                  {{ rule }}
                </div>
              </div>
            </div>
          </v-card>
      </div>

      <div class="portal-home__schedule my-16">
        <Schedule />
      </div>

      <div class="portal-home__ancop my-5">
        <Ancop />
      </div>
    </div>

    <!-- <AppFooter /> -->
  </v-app>
</template>

<script>
import AppHeader from '../../components/header/AppHeader'
import AppFooter from '../../components/footer/AppFooter'
import Schedule from './components/Schedule'
import Ancop from './components/Ancop'
import VideoStream from './components/VideoStream'
import MyVideoStream from './components/VideoStream'

export default {
  name: 'PortalHome',

  components: {
    AppHeader,
    AppFooter,
    Schedule,
    Ancop,
    VideoStream,
    MyVideoStream
  },

  data () {
    return {
      starIcon: '/images/star-icon-purple.png',
      eventHeads: '/images/event-heads.png',
      reminders: [
        'Bring a journal, rosary, and a bible.',
        'Set an altar or focal point',
        'Find a space where you can be spiritually present.',
        'Do not attend while driving.',
        'Make a donation to ANCOP Canada. (See details below)'
      ],
      rules: [
        'Stand up and participate in worship and prayers.',
        'Close all other tabs and go on Do Not Disturb.',
        'Refrain from using mobile phone.',
        'Turn on your camera and mute your microphone.',
      ]
    }
  },

  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped lang="scss">
.portal-home {
  font-family: "Outfit", sans-serif;
  color: black;
  margin-top: 150px;

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
    max-width: 780px;

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
    max-width: 100%;

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

  &__schedule {
    max-width: 100%;
  }
}

.bible-verse {
  color: #444CE7;
  font-size: 16px;
  line-height: 24px;
  max-width: 80%;
  height: 200px;

  @media only screen and (max-width: 960px) {
    max-width: 90%;
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }

  &__divider {
    height: auto;
    border: 3px solid #444CE7;
  }
}
::v-deep .app {
  background-color: #fff !important;
}
</style>
