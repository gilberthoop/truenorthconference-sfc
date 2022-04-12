<template>
  <div class="registration">
    <div class="registration__left-panel">
      <div
        class="tnc-logo"
        @click="redirectToHomePage"
      >
        <LogoBlackAndRed />
      </div>

      <div class="registration__title">
        Nice! Let’s get some extra details for TNC2022: In Christ!
      </div>

      <div class="registration__subtitle">
        We need these to complete your registration
      </div>
      
      <div class="registration__form">
        <div
          v-if="errorMessage"
          class="registration__error-message"
        >
          {{ errorMessage }}
        </div>

        <v-radio-group
          v-model="inPerson"
        >
          <div>
            Do you plan on attending your area’s in-person gathering for TNC 2022?
          </div>

          <v-row
            class="gathering justify-space-between flex-column flex-sm-row"
            no-gutters
          >
            <v-col
              v-for="(option, index) in gatheringOptions"
              :key="index"
              cols="12"
              sm="6"
              class="gathering__col pt-3 px-sm-2"
            >
              <v-card
                class="gathering"
                outlined
                height="auto"
                :class="{'selected': option === inPerson}"
              >
                <v-radio
                  class="gathering__option px-5"
                  :value="option"
                  color="#2D31A6"
                >
                  <template v-slot:label>
                    <v-card-text class="pr-0 pl-2">
                      <span
                        :class="{'selected-title': option === inPerson}"
                      >
                        {{ option }}
                      </span>
                    </v-card-text>
                  </template>
                </v-radio>
              </v-card>
            </v-col>
          </v-row>
        </v-radio-group>

        <v-radio-group
          v-model="workshop"
        >
          <div>
            Which workshop do you want to attend?*
          </div>

          <v-row
            class="gathering flex-sm-wrap flex-column flex-sm-row"
            no-gutters
          >
            <v-col
              v-for="(option, index) in workshopOptions"
              :key="index"
              cols="12"
              sm="6"
              class="gathering__col pt-3 px-sm-2"
            >
              <v-card
                class="gathering"
                outlined
                height="auto"
                :class="{'selected': option.title === workshop}"
              >
                <v-radio
                  class="gathering__option px-5"
                  :value="option.title"
                  color="#2D31A6"
                >
                  <template v-slot:label>
                    <v-card-text class="pr-0 pl-2">
                      <span
                        :class="{'selected-title': option.title === workshop}"
                      >
                        {{ option.title }}
                      </span>
                      <br/>
                      <span
                        :class="{'selected-theme': option.title === workshop}"
                      >
                        {{ option.theme }}
                      </span>
                    </v-card-text>
                  </template>
                </v-radio>
              </v-card>
            </v-col>
          </v-row>
        </v-radio-group>

        <AppFlowNavButtons
          :show-back="true"
          :continue-text="$vuetify.breakpoint.xsOnly ? 'Register' : 'Complete my registration'"
          @back="handleBack"
          @continue="handleContinue"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import LogoBlackAndRed from '../../components/icons/LogoBlackAndRed'
import AppFlowNavButtons from '../../components/AppFlowNavButtons'
import AuthMixin from '../../mixins/auth-mixin'

export default {
  name: 'WorkshopForm',

  components: {
    ValidationObserver,
    ValidationProvider,
    LogoBlackAndRed,
    AppFlowNavButtons
  },

  mixins: [AuthMixin],

  data () {
    return {
      gatheringOptions: ['Yes', 'No'],
      workshopOptions: [
        {
          title: 'Avoiding Dead Air',
          theme: 'Theme: Deepening prayer life'
        },
        {
          title: 'Dealing with Distortion',
          theme: 'Theme: Conflict Resolution'
        },
        {
          title: 'Navigating the Noise',
          theme: 'Theme: Media Literacy'
        },
        {
          title: 'Effective Bandwidth',
          theme: 'Theme: Lifestyle'
        },
        {
          title: 'High Definition Faith',
          theme: 'Theme: Character'
        },
        {
          title: 'Healing Harmonic',
          theme: 'Theme: Healing'
        }
      ]
    }
  },

  computed: {
  },

  methods: {
    handleBack () {
      this.step--
    },

    handleContinue () {
      this.onRegistrationSubmit()
      this.step++
    }
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

  &__right-panel {
    &--background {
      flex-wrap: nowrap;
    }
  }

  &__title {
    font-size: 36px;
    font-weight: 500;
    color: #101828;

    @media only screen and (max-width: 600px) {
      margin-top: 60px;
    }
  }

  &__subtitle {
    font-size: 20px;
    font-weight: 400;
    color: #667085;
    line-height: 27px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  &__form {
    font-size: 18px;
    line-height: 28px;

    &--greyed {
      color: #667085;
    }

    ::v-deep .v-list-item__title {
      font-size: 18px;
    }

    ::v-deep .v-input {
      font-size: 18px;
    }

    ::v-deep .v-messages {
      font-size: 14px;
      line-height: 20px;
      color: #667085;
      padding-top: 5px;
    }
  }

  &__submit-btn {
    font-size: 18px !important;
    text-transform: none;
    color: #fff !important;
    left: 0px;
    top: 0px;
    border-radius: 8px;
    padding: 16px, 28px, 16px, 28px;

    @media only screen and (max-width: 600px) {
      width: 100% !important;
    }
  }

  &__login-link {
    color: #3538CD;
    text-decoration: none;

  }

  &__error-message {
    color: red;
    text-align: center;
    margin-bottom: 14px;
  }
}

.tnc-logo {
  position: absolute;
  top: 35px;
  left: 40px;
  cursor: pointer;
}

.gathering {
  border-color: #EAECF0;
  border-radius: 8px;
}

.selected {
  border-color: #2D31A6;
  background-color: #A4BCFD;

  ::v-deep .v-input--selection-controls__input {
    color: #2D31A6 !important;
    caret-color: #2D31A6 !important;
  }

  &-title {
      color: #2D31A6;
  }

  &-theme {
    color: #444CE7;
  }
}
</style>