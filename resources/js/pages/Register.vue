<template>
<v-app>
  <div class="registration">
    <div class="registration__left-panel">
      <div
        class="tnc-logo"
        @click="redirectToHomePage"
      >
        <LogoBlackAndRed />
      </div>

      <div class="registration__title">
        Register for free
      </div>

      <div class="registration__subtitle">
        Join SFC Canada's biggest event in 2022
      </div>
      
      <div class="registration__form mt-5">
        <div
          v-if="errorMessage"
          class="registration__error-message"
        >
          {{ errorMessage }}
        </div>

        <ValidationObserver ref="observer">
          <ValidationProvider
            v-slot="{ errors }"
            :rules="nameInputRules"
          >
            <div>Name*</div>
            <v-text-field
              v-model="user.name"
              type="text"
              placeholder="Enter your name"
              outlined
              dense
              color="#344054"
              hint="Must be a full name with at least 3 letters"
              :error-messages="errors && errors.length > 0 ? 'Please enter a valid name' : ''"
              class="registration__form--greyed my-1"
              @focus="nameFieldFocused = true"
              @blur="nameFieldFocused = false"
            />
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            :rules="emailInputRules"
          >
            <div>Email*</div>
            <v-text-field
              v-model="user.email"
              name="email"
              type="email"
              placeholder="Enter your email"
              outlined
              dense
              color="#344054"
              :error-messages="errors && errors.length > 0 ? 'Please enter a valid email' : ''"
              class="registration__form--greyed my-1"
              @focus="emailFieldFocused = true"
              @blur="emailFieldFocused = false"
            />
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            :rules="passwordInputRules"
          >
            <div>Password*</div>
            <v-text-field
              v-model="user.password"
              type="password"
              placeholder="Create a password"
              outlined
              dense
              color="#344054"
              hint="Must be at least 8 characters"
              :error-messages="errors && errors.length > 0 ? 'Please enter your password' : ''"
              class="registration__form--greyed my-1"
              @focus="passwordFieldFocused = true"
              @blur="passwordFieldFocused = false"
            />
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            :rules="regionInputRules"
          >
            <div>Region*</div>
            <v-select
              v-model="user.region"
              :items="regions"
              placeholder="Choose your region"
              outlined
              dense
              color="#344054"
              :error-messages="errors && errors.length > 0 ? 'Please select your region' : ''"
              class="registration__form--greyed registration__form--selected my-1"
              @focus="regionFieldFocused = true"
              @blur="regionFieldFocused = false"
            />
          </ValidationProvider>
        </ValidationObserver>

        <v-btn
          class="registration__submit-btn my-1"
          color="#444CE7"
          height="60px"
          width="366px"
          depressed
          :loading="loading"
          @click="onRegistrationSubmit"
        >
          Register
        </v-btn>
      </div>

      <div class="mt-4 text-center">
        Already registered for TNC 2022?
        <a href="#" class="registration__login-link">Log in</a>
      </div>
    </div>

    <div class="registration__right-panel">
      <v-img
        v-if="$vuetify.breakpoint.mdAndUp"
        class="registration__right-panel--background"
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
  name: 'Register',

  components: {
    ValidationObserver,
    ValidationProvider,
    LogoBlackAndRed
  },

  data () {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        region: null
      },
      regions: [
        'Atlantic',
        'Capital',
        'Central',
        'Mountain',
        'Pacific',
        'International'
      ],
      bgImgSrc: '/images/registration.png',
      loading: false,
      errorMessage: '',
      nameFieldFocused: false,
      emailFieldFocused: false,
      passwordFieldFocused: false,
      regionFieldFocused: false
    }
  },

  computed: {
    nameInputRules () {
      return this.nameFieldFocused ? '' : 'required|alpha_spaces||max:40|min:3'
    },

    emailInputRules () {
      return this.emailFieldFocused ? '' : 'required|email'
    },

    passwordInputRules () {
      return this.passwordFieldFocused ? '' : 'required|max:40|min:8'
    },

    regionInputRules () {
      return this.regionFieldFocused ? '' : 'required|max:40|min:3'
    }
  },

  watch: {
    errorMessage (value) {
      return value
    }
  },

  methods: {
    async onRegistrationSubmit () {
      this.errorMessage = ''
      const validInputs = await this.$refs.observer.validate();
      if (!validInputs) return
  
      try {
        this.loading = true
        const response = await axios.post('/register', this.user)
        
        //TODO
        if (response.status === 200) {
          // Log participant in
          // login()

          // Load participant information
          // this.$store.dispatch('loadUser')

          // Redirect to home page
          // this.$router.push('home')
        }
      } catch (error) {
        this.errorMessage = error.response.data.message
      }

      this.loading = false
    },

    redirectToHomePage () {
      this.$router.push('home')
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
</style>