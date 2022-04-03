<template>
    <v-footer
      class="footer"
      width="100%"
      :height="$vuetify.breakpoint.mdAndUp ? 80 : 200"
      padless
    >
      <v-card
        class="footer__card d-flex align-center justify-center items-center flex-column flex-md-row"
        color="#2D31A6"
        width="100%"
        flat
        tile
      >
        <div class="order-2 order-md-1 py-6 py-md-0 mr-md-auto">
            <a
              class="footer__link mx-1"
              href="https://www.instagram.com/cfcsfccanada"
              target="_blank"
            >
              <v-icon
                medium
                color="white"
              >
                mdi-instagram
              </v-icon>
            </a>

            <a
              class="footer__link mx-1"
              href="https://www.facebook.com/cfcsfccanada/"
              target="_blank"
            >
              <v-icon
                medium
                color="white"
              >
                mdi-facebook
              </v-icon>
            </a>
        </div>

        <v-img
          class="order-1 order-md-2"
          :src="logoSrc"
          max-width="123"
          max-height="50"
        />

        <div class="order-3 ml-md-auto">
          &copy; 2022 Singles for Christ Canada
        </div>
      </v-card>
    </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',

  data () {
    return {
      logoSrc: '/images/tnclogo-white.svg'
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  font-family: "Outfit", sans-serif;
  color: #fff;
  background-color: #2D31A6 !important;
  padding-left: 30px;
  padding-right: 30px;

  @media only screen and (min-width: 600px) {
    padding-left: 90px;
    padding-right: 90px;
  }

  &__card {
    color: #fff;
  }

  &__link {
    text-decoration: none;
  }
}
</style>