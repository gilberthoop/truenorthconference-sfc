<template>
  <v-app-bar
    class="app-bar px-0 px-sm-5 px-md-13"
    height="108"
    color="#fff"
    elevation="0"
    app
  >
    <v-container
      class="pa-0"
      fluid
    >
      <div class="d-none d-md-flex justify-space-between">
        <div>
          <LogoBlackAndRed />
          <v-btn
            v-for="(link, index) in links"
            :key="index"
            class="app-bar__button text-capitalize mx-2 px-4"
            elevation="0"
            color="#fff"
            width="auto"
            height="60"
            @click="$router.push(link.route)"
          >
            {{ link.name }}
          </v-btn>
        </div>

        <div>
          <v-btn
            class="app-bar__button text-capitalize px-5"
            elevation="0"
            color="#fff"
            width="auto"
            height="60"
            @click="logOut"
          >
            Logout
          </v-btn>
        </div>
      </div>

      <div class="d-flex d-md-none justify-space-between align-center">
        <div>
          <LogoBlackAndRed />
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
                color="#101828"
              >
                menu
              </v-icon>
              <v-icon
                v-else
                large
                color="#101828"
              >
                close
              </v-icon>
            </v-btn>
          </template>

          <v-list class="py-8">
            <v-list-item
              v-for="(link, index) in links"
              :key="index"
            >
              <v-btn
                :key="index"
                class="app-bar__button text-capitalize px-5"
                elevation="0"
                color="#fff"
                width="auto"
                height="60"
                @click="$router.push(link.route)"
              >
                {{ link.name }}
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn
                class="app-bar__button text-capitalize px-5"
                elevation="0"
                color="#fff"
                width="auto"
                height="60"
                @click="logOut"
              >
                Logout
              </v-btn>
            </v-list-item>
          </v-list>
        </v-dialog>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import LogoBlackAndRed from '../../components/icons/LogoBlackAndRed'
import AuthMixin from '../../mixins/auth-mixin'

export default {
  name: 'AppHeader',

  components: {
    LogoBlackAndRed
  },

  mixins: [AuthMixin],

  data () {
    return {
      links: [
        {
          name: 'Home',
          route: 'home'
        },
        {
          name: 'Competitions',
          route: 'home'
        },
        {
          name: 'Workshops',
          route: 'home'
        }
      ],
      dialog: false
    }
  }
}
</script>

<style scoped lang="scss">
.app-bar {
  &__button {
    font-size: 18px !important;
    font-family: "Outfit", sans-serif !important;
    color: #3538CD !important;
  }
}

::v-deep .v-dialog--fullscreen {
  top: 100px;
}
</style>
