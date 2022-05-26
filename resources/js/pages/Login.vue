<template>
  <v-app>
    <div class="login">
      <div class="login__left-panel">
        <div
          class="tnc-logo"
          @click="redirectToHomePage"
        >
          <LogoBlackAndRed />
        </div>

        <div class="login__title">
          Log in
        </div>

        <div class="login__subtitle">
          Welcome back! Please enter your details.
        </div>

        <div class="login__form mt-5">
          <div
            v-if="errorMessage"
            class="login__error-message"
          >
            {{ errorMessage }}
          </div>

          <ValidationObserver ref="observer">
            <ValidationProvider
              v-slot="{ errors }"
              :rules="emailInputRules"
            >
              <div>Email</div>
              <v-text-field
                v-model="email"
                type="text"
                placeholder="Enter your email"
                outlined
                dense
                color="#344054"
                :error-messages="errors && errors.length > 0 ? 'Please enter your email' : ''"
                class="login__form--greyed my-1"
                @focus="emailFieldFocused = true"
                @blur="emailFieldFocused = false"
              >
              </v-text-field>
            </ValidationProvider>

            <div class="d-flex justify-space-between align-center forgot-password-dialog">
                <div>Password</div>
                <v-dialog
                  v-model="dialog"
                  transition="scroll-y-transition"
                  hide-overlay
                  max-width="600"
                  :retain-focus="false"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="login__forgot-password-link text-capitalize"
                      width="auto"
                      height="100%"
                      color="#fff"
                      elevation="0"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Forgot Password
                    </v-btn>
                  </template>

                  <v-card
                    class="login__registration-notice pa-5 text-center"
                    max-width="100%"
                    max-height="100%"
                    color="#F5F8FF"
                    elevation="0"
                  >
                    Please send a password reset request to cfcsfctnc@gmail.com.

                    <div class="mt-3 text-center">
                      <v-btn
                        class="login__registration-link text-capitalize px-1"
                        elevation="0"
                        color="#F5F8FF"
                        width="auto"
                        @click.native="dialog=false"
                      >
                        Okay
                      </v-btn>
                    </div>
                  </v-card>
                </v-dialog>
                </div>

            <ValidationProvider
              v-slot="{ errors }"
              :rules="passwordInputRules"
            >
              <v-text-field
                v-model="password"
                type="password"
                placeholder="Enter password"
                outlined
                dense
                color="#344054"
                :error-messages="errors && errors.length > 0 ? 'Please try again' : ''"
                class="login__form--greyed my-1"
                @focus="passwordFieldFocused = true"
                @blur="passwordFieldFocused = false"
              />
            </ValidationProvider>
          </ValidationObserver>

          <v-btn
            class="login__submit-btn my-2"
            color="#444CE7"
            height="60px"
            width="366px"
            depressed
            :loading="loading"
            @click.prevent="logInUser"
          >
            Sign in
          </v-btn>
        </div>

        <!-- <div class="login__registration-notice mt-4 text-center d-flex align-center">
          Haven't registered for TNC 2022?
          <v-btn
            class="login__registration-link text-capitalize px-1"
            elevation="0"
            color="#fff"
            width="auto"
            @click="$router.push('register')"
          >Register for free
          </v-btn>
        </div> -->
      </div>

      <div class="login__right-panel">
        <v-img
          v-if="$vuetify.breakpoint.mdAndUp"
          class="login__right-panel--background"
          :src="bgImgSrc"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </v-app>
</template>

<script>
import { ValidationObserver, ValidationProvider, validate } from 'vee-validate'
import LogoBlackAndRed from '../components/icons/LogoBlackAndRed'
import AuthMixin from '../mixins/auth-mixin'

export default {
  name: 'Login',

  components: {
    ValidationObserver,
    ValidationProvider,
    LogoBlackAndRed
  },

  mixins: [AuthMixin],

  data () {
    return {
      emailFieldFocused: false,
      passwordFieldFocused: false,
      dialog: false
    }
  },

  computed: {
    emailInputRules () {
      return this.emailFieldFocused ? '' : 'required|email'
    },

    passwordInputRules () {
      return this.passwordFieldFocused ? '' : 'required|max:40|min:8'
    }
  },

  mounted () {
    window.scrollTo(0, 0)
  },

  methods: {
    async logInUser () {
      this.errorMessage = ''
      const validInputs = await this.$refs.observer.validate(); 
      if (!validInputs) return

      this.logIn()
    }
  }
}
</script>

<style scoped lang="scss">
.login {
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
    padding-left: 80px;
    padding-right: 80px;

    @media only screen and (max-width: 600px) {
      margin: 50px 20px;
      padding: 0;
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

  &__registration-link {
    font-family: "Outfit", sans-serif !important;
    color: #3538CD;
    text-decoration: none !important;
  }

  &__forgot-password-link {
    font-family: "Outfit", sans-serif !important;
    color: #3538CD;
    text-decoration: none !important;
    font-size: 18px;
  }

  &__registration-notice {
    font-family: "Outfit", sans-serif !important;
  }

  &__error-message {
    color: red;
    text-align: center;
    margin-bottom: 14px;
  }
}

.tnc-logo {
  position: absolute;
  top: 40px;
  left: 40px;
  cursor: pointer;
}

.forgot-password-dialog {
}
</style>