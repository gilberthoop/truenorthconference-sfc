<template>
  <div class="register-now">
    <v-card
      class="register-now__card d-flex flex-column justify-space-between"
      color="#1D2939"
      width="100%"
      height="973"
    >
    <div class="register-now__card--upper">
      <div class="register-now__card-title--gradient">
        What are you waiting for?
      </div>

      <div class="register-now__card-title d-flex justify-start">
        Register now
        <v-img
          class="register-now__image-arrow ml-9"
          :src="arrowImgSrc"
          @click="redirectToRegistration"
        />
      </div>
    </div>

    <div class="register-now__card--lower mt-2 mt-sm-16">
      <v-img
        class="register-now__image-ticks"
        :src="ticksImgSrc"
        width="67"
        height="74"
      />

      <v-img
        class="register-now__image-one"
        :src="firstImgSrc"
      />

      <v-img
        v-if="$vuetify.breakpoint.lgAndUp"
        class="register-now__image-two"
        :src="secondImgSrc"
        width="520"
        height="607"
      />

      <v-img
        v-if="$vuetify.breakpoint.lgAndUp"
        class="register-now__image-star--left"
        :src="starLeftImgSrc"
        width="51"
        height="53"
      />

      <v-img
        v-if="$vuetify.breakpoint.lgAndUp"
        class="register-now__image-star--right"
        :src="starRightImgSrc"
        width="63"
        height="69"
      /> 
    </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'RegisterNow',

  data () {
    return {
      firstImgSrc: '/images/register-now/register1.png',
      secondImgSrc: '/images/register-now/register2.png',
      arrowImgSrc: '/images/register-now/arrow-right-circle.png',
      ticksImgSrc: '/images/register-now/ticks.png',
      starLeftImgSrc: '/images/register-now/star1.png',
      starRightImgSrc: '/images/register-now/star2.png'
    }
  },

  methods: {
    redirectToRegistration () {
      this.$router.push('register')
    }
  }
}
</script>

<style scoped lang="scss">
.register-now {
  font-family: "Outfit", sans-serif;
  color: #fff;
  position: relative;
  margin: 120px 80px;

  @media only screen and (min-width: 600px) and (max-width: 960px) {
    margin: 70px 40px;
  }

  @media only screen and (max-width: 600px) {
    margin: 50px 20px;
  }

  &__card {
    color: #fff;
    border-radius: 12px;
    padding: 100px 85px;

    @media only screen and (max-width: 1200px) {
      height: 100% !important;
    }

    @media only screen and (max-width: 960px) {
      padding-left: 30px;
      padding-right: 30px;
    }

    @media only screen and (max-width: 600px) {
      padding-top: 40px;
      padding-bottom: 60px;
    }

    &--lower {
      @media only screen and (max-width: 370px) {
        margin-top: 40px !important;
      }
    }
  
    &-title {
      font-size: 124px;
      line-height: 116px;
      font-weight: 700;
      z-index: 100;
      position: absolute;

      @media only screen and (min-width: 600px) and (max-width: 1200px) {
        font-size: 72px;
        line-height: 90px;
      }

      @media only screen and (max-width: 600px) {
        font-size: 36px;
        line-height: 44px;
      }

      &--gradient {
        font-size: 72px;
        line-height: 90px;
        font-weight: 700;
        background: linear-gradient(90deg, #444CE7 0%, #9E77ED 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media only screen and (max-width: 600px) {
          font-size: 36px;
          line-height: 44px;
        }
      }
    }
  }

  &__image-arrow {
    width: 116px;
    height: 116px;
    cursor: pointer;

    @media only screen and (min-width: 600px) and (max-width: 1200px) {
      width: 90px;
      height: 90px;
    }

    @media only screen and (max-width: 600px) {
      width: 44px;
      height: 44px;
    }

    @media only screen and (max-width: 360px) {
      margin-left: 0 !important;
      margin-right: 36px !important;
    } 
  }

  &__image-ticks {
    position: absolute;
    bottom: 427px;
    left: 35px;

    @media only screen and (max-width: 1200px) {
      position: relative;
      bottom: 0;
      left: 0;
      margin-top: 50px;
    }

    @media only screen and (max-width: 600px) {
      width: 40px !important;
      height: 40px !important;
    }
  }

  &__image-one {
    position: absolute;
    bottom: 100px;
    left: 85px;
    width: 542px;
    height: 337px;

    @media only screen and (max-width: 1200px) {
      position: relative;
      bottom: 0;
      left: 0;
      width: 90% !important;
      height: 70% !important;
      margin-left: 60px;
    }

    @media only screen and (max-width: 600px) {
      margin-left: 30px;
    }
  }

  &__image-two {
    position: absolute;
    bottom: 100px;
    right: 85px;
    z-index: 0;
    -webkit-filter: grayscale(87%); /* Safari 6.0 - 9.0 */
    filter: sepia(100%) grayscale(60%) hue-rotate(190deg) saturate(350%);
  }

  &__image-star--left {
    position: absolute;
    right: 95px;
    bottom: 680px;
  }

  &__image-star--right {
    position: absolute;
    right: 50px;
    bottom: 620px;
  }
}
</style>