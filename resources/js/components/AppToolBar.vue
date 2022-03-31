<template>
    <v-app-bar
      app
      class="app-bar px-0 px-sm-5 px-md-10"
      height="108"
      color="rgba(16, 24, 40, 0.75)"
    >
      <v-container
        class="pa-0 d-flex"
        fluid
      >
        <v-row
          no-gutters
          class="align-center justify-space-around items-center"
        >
          <v-col
            class="d-none d-md-flex"
            cols="auto"
          >
            <div
              v-for="(link, index) in links"
              :key="index"
            >
              <router-link
                class="app-bar__links px-5"
                :to="{name: link.route}"
              >
                {{ link.name }}
              </router-link>
            </div>
          </v-col>
  
          <v-col class="d-flex justify-start justify-md-center">
            <v-img
              :src="logoSrc"
              max-width="123"
              max-height="50"
            />
          </v-col>

          <v-col class="app-bar__buttons d-none d-md-flex justify-end">
            <v-btn
              class="mx-3 text-capitalize"
              color="#EEF4FF"
              width="94"
              height="60"
              @click="onLogInClick"
            >
              Log in
            </v-btn>
            <v-btn
              class="app-bar__buttons--gradient mx-3 text-capitalize"
              width="115"
              height="60"
              @click="onRegisterClick"
            >
              Register
            </v-btn>
          </v-col>

          <v-col class="app-bar__buttons d-flex d-md-none justify-end align-center">
            <v-btn
              class="mx-3 text-capitalize d-none d-sm-block"
              color="#EEF4FF"
              width="104"
              height="60"
              @click="onLogInClick"
            >
              Log in
            </v-btn>
            
            <v-btn
              class="app-bar__buttons--gradient mx-3 text-capitalize d-none d-sm-block"
              width="123"
              height="60"
              @click="onRegisterClick"
            >
              Register
            </v-btn>

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
                  <router-link
                    class="app-bar__links px-0 px-sm-5"
                    :to="{name: link.route}"
                  >
                    {{ link.name }}
                  </router-link>
                </v-list-item>
              </v-list>
              
              <div class="app-bar__buttons--mobile d-flex d-sm-none flex-column px-4">
                <v-btn
                  class="my-3 text-capitalize"
                  color="#EEF4FF"
                  max-width="100%"
                  height="60"
                  @click="onLogInClick"
                >
                  Log in
                </v-btn>
                <v-btn
                  class="app-bar__buttons--gradient my-3 text-capitalize"
                  max-width="100%"
                  height="60"
                  @click="onRegisterClick"
                >
                  Register
                </v-btn>
              </div>
            </v-dialog>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
</template>

<script>
export default {
  name: 'AppToolBar',

  data () {
    return {
      links: [
        { name: 'Details', route: '#' },
        { name: 'Agenda', route: '#' },
        { name: 'Past Speakers', route: '#' },
        { name: 'FAQ', route: '#' }
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
  z-index: 10 !important;
  font-size: 18px !important;
  font-family: "Outfit", sans-serif !important;

  &__links-list {
    background-color: #2D3282;
  }
  
  &__links {
    text-decoration: none;
    color: #fff;
  }

  &__buttons {
    ::v-deep .v-btn.v-size--default {
      font-size: 16px;
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
</style>