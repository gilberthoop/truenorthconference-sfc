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

            <ValidationProvider
              v-slot="{ errors }"
              :rules="passwordInputRules"
            >
              <div class="d-flex justify-space-between">
                <div>Password</div>
                <a href="#" class="login__forgot-password-link">Forgot Password</a>
              </div>
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
            @click.prevent="logIn"
          >
            Sign in
          </v-btn>
        </div>

        <div class="mt-4 text-center">
          Haven't registered for TNC 2022?
          <a href="#" class="login__registration-link">Register for free</a>
        </div>
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

export default {
  name: 'Login',

  components: {
    ValidationObserver,
    ValidationProvider,
    LogoBlackAndRed
  },

  data () {
    return {
      email: null,
      password: null,
      bgImgSrc: '/images/registration.png',
      loading: false,
      errorMessage: '',
      emailFieldFocused: false,
      passwordFieldFocused: false,
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

  watch: {
    errorMessage (value) {
      return value
    }
  },

  methods: {
    async logIn () {
      this.errorMessage = ''
      const validInputs = await this.$refs.observer.validate(); 
      if (!validInputs) return

      try {
        this.loading = true
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/login', {
          email: this.email,
          password: this.password
        })
      } catch (error) {
        if (error.response?.data?.message) {
          this.errorMessage = 'Sign in failed. Please check your email and password.'
        }
      }

      this.loading = false
    },

    redirectToHomePage () {
      this.$router.push('home')
      console.log('ge')
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

  &__registration-link,
  &__forgot-password-link {
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
  top: 40px;
  left: 40px;
  cursor: pointer;
}
</style>