<template>
    <v-app-bar
      class="app-bar px-0 px-sm-5 px-md-16"
      height="108"
      color="rgba(18, 26, 46, 0.9)"
      elevation="0"
      app
    >
      <v-container
        class="pa-0"
        fluid
      >
        <v-row
          no-gutters
          class="align-center justify-center items-center"
        >
          <v-col
            class="d-none d-md-flex"
            cols="auto"
          >
            <div
              v-for="(link, index) in links"
              :key="index"
            >
              <a
                class="app-bar__links px-5"
                :href="link.route"
              >
                {{ link.name }}
              </a>
            </div>
          </v-col>
  
          <v-col class="d-flex justify-start justify-md-center">
            <v-img
              class="app-bar__logo"
              :src="logoSrc"
              max-width="123"
              max-height="50"
              @click="redirectToHomePortal"
            />
          </v-col>

          <v-col
            v-if="loggedIn"
            class="app-bar__buttons user d-none d-md-flex justify-end align-center"
          >
            <div>
              <v-btn
                class="portal-btn mx-3 text-capitalize"
                width="auto"
                height="50"
                @click="redirectToHomePortal"
              >
                Back to Portal
              </v-btn>
            </div>
            <div class="ml-5">
              <v-btn
                class="logout-btn mx-3 text-capitalize"
                color="#EEF4FF"
                width="auto"
                height="50"
                @click="logOut"
              >
                Log out
              </v-btn>
            </div>
          </v-col>
          <v-col
            v-else
            class="app-bar__buttons d-none d-md-flex justify-end"
          >
            <v-btn
              class="mx-3 text-capitalize"
              color="#EEF4FF"
              width="104"
              height="60"
              @click="onLogInClick"
            >
              Log in
            </v-btn>
            <!-- <v-btn
              class="app-bar__buttons--gradient mx-3 text-capitalize"
              width="123"
              height="60"
              @click="onRegisterClick"
            >
              Register
            </v-btn> -->
          </v-col>

          <v-col class="app-bar__buttons d-flex d-md-none justify-end align-center">
            <div
              v-if="loggedIn"
              class="user d-none d-sm-block"
            >
              <v-btn
                class="portal-btn mx-3 text-capitalize"
                width="auto"
                height="50"
                @click="redirectToHomePortal"
              >
                Back to Portal
              </v-btn>
            </div>
            <div
              class="d-flex"
              v-else
            >
              <v-btn
                class="mx-3 text-capitalize d-none d-sm-block"
                color="#EEF4FF"
                width="104"
                height="60"
                @click="onLogInClick"
              >
                Log in
              </v-btn>
            
              <!-- <v-btn
                class="app-bar__buttons--gradient mx-3 text-capitalize d-none d-sm-block"
                width="123"
                height="60"
                @click="onRegisterClick"
              >
                Register
              </v-btn> -->
            </div>

            <v-dialog 
              v-model="dialog"
              transition="scroll-y-transition"
              hide-overlay
              fullscreen
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  width="50"
                  min-width="50"
                  height="70"
                  min-height="70"
                  color="rgba(255, 255, 255, 0)"
                  class="ml-4"
                  outlined
                  v-bind="attrs"
                  v-on="on"
                  @click.native="!!dialog"
                >
                  <v-icon
                    v-if="!dialog"
                    large
                    color="white"
                  >
                    menu
                  </v-icon>
                  <v-icon
                    v-else
                    large
                    color="white"
                  >
                    close
                  </v-icon>
                </v-btn>
              </template>

              <v-list class="app-bar__links-list">
                <v-list-item
                  v-for="(link, index) in links"
                  :key="index"
                >
                  <a
                    class="app-bar__links px-0 px-sm-5"
                    :href="link.route"
                  >
                    {{ link.name }}
                  </a>
                </v-list-item>
              </v-list>

              <v-btn
                v-if="loggedIn && $vuetify.breakpoint.smOnly"
                class="logout-btn mx-10 text-capitalize"
                color="#EEF4FF"
                width="auto"
                height="120"
                @click="logOut"
              >
                Log out
              </v-btn>
              
              <div class="app-bar__buttons--mobile d-flex d-sm-none flex-column px-4">
                <div
                  v-if="loggedIn"
                  class="user d-flex flex-column"
                >
                  <v-btn
                    class="portal-btn text-capitalize"
                    width="auto"
                    height="50"
                    @click="redirectToHomePortal"
                  >
                    Back to Portal
                  </v-btn>
                  <v-btn
                    class="logout-btn mt-5 text-capitalize"
                    color="#EEF4FF"
                    width="auto"
                    height="45"
                    @click="logOut"
                  >
                    Log out
                  </v-btn>
                </div>
                <div v-else>
                  <v-btn
                    class="my-3 text-capitalize"
                    color="#EEF4FF"
                    max-width="100%"
                    height="60"
                    @click="onLogInClick"
                  >
                    Log in
                  </v-btn>
                  <!-- <v-btn
                    class="app-bar__buttons--gradient my-3 text-capitalize"
                    max-width="100%"
                    height="60"
                    @click="onRegisterClick"
                  >
                    Register
                  </v-btn> -->
                </div>
              </div>
            </v-dialog>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
</template>

<script>
import AuthMixin from '../../mixins/auth-mixin'

export default {
  name: 'AppToolBar',

  mixins: [AuthMixin],

  data () {
    return {
      links: [
        { name: 'Details', route: '#details' },
        { name: 'Agenda', route: '#agenda' },
        { name: 'Workshops', route: '#workshops' },
        { name: 'FAQ', route: '#faq' }
      ],
      logoSrc: '/images/tnclogo-white.svg',
      dialog: false
    }
  },

  methods: {
    onRegisterClick () {
      this.$router.push('register')
    },

    onLogInClick () {
      this.$router.push('login')
    }
  }
}
</script>

<style scoped lang="scss">
.app-bar {
  font-size: 18px !important;
  font-family: "Outfit", sans-serif !important;
  backdrop-filter: blur(10px);

  &__logo {
    cursor: pointer;
  }

  &__links-list {
    background-color: #2D3282 !important;
  }
  
  &__links {
    text-decoration: none;
    color: #fff;
  }

  &__buttons {
    ::v-deep .v-btn.v-size--default {
      font-size: 18px;
      color: #3538CD;
    }

    ::v-deep .v-toolbar__content .v-btn.v-btn--icon.v-size--default {
      width: 100% !important;
      height: 100% !important;
    }

    &--gradient {
      color: #fff !important;
      background: linear-gradient(90deg, #444CE7 0%, #9E77ED 100%);
    }

    &--mobile {
      position: absolute;
      bottom: 120px;
    }
  }
}

.user {
  color: #fff !important;

  @media only screen and (max-width: 600px) {
    font-size: 24px !important;
  }
}

::v-deep .v-dialog--fullscreen {
  background-color: #2D3282;
  top: 100px;
  font-family: "Outfit", sans-serif !important;
  font-size: 30px;
  line-height: 90px;
  font-weight: 500;

  @media only screen and (min-width: 600px) and (max-width: 960px) {
    font-size: 72px;
    line-height: 150px;
  }
}

::v-deep .v-btn {
  border-radius: 8px;
}

.logout-btn {
  color: #3538CD !important;
  
  @media only screen and (min-width: 600px) and (max-width: 960px) {
    font-size: 72px !important;
    position: absolute;
    bottom: 130px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px !important;
  }
}

.portal-btn {
  color: #fff !important;
  background: linear-gradient(90deg, #444CE7 0%, #9E77ED 100%);

  @media only screen and (max-width: 600px) {
    font-size: 30px !important;
  }
}

</style>