<template>
  <div class="intro">
    <div class="intro__title">
      <span class="intro__title--gradient">
        Experience
      </span>
      Christ at the True North
    </div>
    <div class="intro__subtitle mt-5 mb-7">
      A yearly conference with your brothers and sisters.
    </div>

    <div class="intro__cta d-flex justify-space-between justify-sm-start">
      <v-btn
        class="intro__cta-register mr-0 mr-sm-8 mr-md-6"
        :width="$vuetify.breakpoint.xsOnly ? '45%' : '123'"
        height="60"
        color="#444CE7"
      >
        Register
      </v-btn>
      <v-btn
        class="intro__cta-learn"
        outlined
        :width="$vuetify.breakpoint.xsOnly ? '50%' : 'auto'"
        height="60"
      >
        Learn more
        <v-icon class="ml-2">
          arrow_downward
        </v-icon>
      </v-btn>
    </div>

   <div class="image">
    <div class="image__upper d-flex justify-space-between">
      <v-img
        class="image__top-left"
        :src="topLeftImg"
      />
      <v-img
        class="image__top-right"
        :src="topRightImg"
      />
    </div>

    <div class="image__lower d-flex justify-space-between">
      <v-img
        class="image__bottom-left"
        :src="bottomLeftImg"
      />
      <v-img
        class="image__bottom-right"
        :src="bottomRightImg"
      />
    </div>

    <v-img
      class="image__sfc"
      :src="sfcLogo"
    />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',

  data () {
    return {
      topLeftImg: '/images/introduction/top-left.png',
      topRightImg: '/images/introduction/top-right.png',
      bottomLeftImg: '/images/introduction/bottom-left.png',
      bottomRightImg: '/images/introduction/bottom-right.png',
      sfcLogo: '/images/introduction/sfc-logo.png'
    }
  }
}
</script>

<style scoped lang="scss">
.intro {
  font-family: "Outfit", sans-serif;
  color: #fff;
  position: relative;
  margin: 310px 80px 120px;
  min-height: 100vh;

  @media only screen and (min-width: 600px) and (max-width: 960px) {
    margin: 250px 40px;
  }

  @media only screen and (max-width: 600px) {
    margin: 250px 20px 100px;
  }

  &__title {
    font-size: 124px;
    font-weight: 700;
    line-height: 116px;

    @media only screen and (min-width: 600px) and (max-width: 960px) {
      font-size: 100px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 48px;
      line-height: 60px;
    }

    &--gradient {
      background: linear-gradient(90deg, #444CE7 30%, #9E77ED 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__subtitle {
    font-size: 36px;

    @media only screen and (max-width: 600px) {
      font-size: 24px;
    }
  }

  &__cta-register, &__cta-learn {
    color: #fff !important;
    font-size: 18px !important;
    text-transform: none;
  }

  &__cta-learn {
    border:none;
  }
}

.image {
  position: relative;
  height: 1450px;
  max-width: 100%;
  margin-top: 20px; 

  @media only screen and (max-width: 1200px) {
    margin-top: 12%;
  }

  @media only screen and (max-width: 960px) {
    height: 700px;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    margin-top: 20%;
  }

  &__upper,
  &__lower {
    max-width: 100%;
  }

  &__top-left {
    max-width: 600px;
    max-height: 406px;
    width: 50%;
    height: 50%;
    margin: 20% 0;

    @media only screen and (max-width: 1200px) {
      margin-top: 18%;
    }
  }

  &__top-right {
    max-width: 680px;
    max-height: 884px;
    width: 50%;
    height: 50%;
  }

  &__bottom-left {
    max-width: 406px;
    max-height: 602px;
    width: 50%;
    height: 50%;
    margin-top: -8%;

    @media only screen and (max-width: 1200px) {
      max-width: 306px;
      max-height: 402px;
    }

    @media only screen and (max-width: 600px) {
      max-width: 306px;
      max-height: 402px;
    }
  }

  &__bottom-right {
    max-width: 640px;
    max-height: 389px;
    width: 50%;
    height: 50%;
    margin-top: 8%;

    @media only screen and (max-width: 1200px) {
      margin-top: 17%;
    }

    @media only screen and (max-width: 600px) {
      margin-top: 35%;
    }
  }

  &__sfc {
    position: absolute;
    top: -110px;
    right: 40px;
    max-width: 190px;
    max-height: 190px;
    width: 100%;
    height: auto;

    @media only screen and (max-width: 600px) {
      top: -60px;
      right: 20px;
      max-width: 120px;
      max-height: 120px;
    }
  }
}
</style>