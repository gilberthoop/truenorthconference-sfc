<template>
  <div class="intro ma-5 ma-sm-16">
    <div class="intro__title mt-8 mt-sm-13">
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
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style scoped lang="scss">
.intro {
  font-family: "Outfit", sans-serif;
  color: #fff;
  position: relative;

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
      background: linear-gradient(90deg, #444CE7 0%, #9E77ED 100%);
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
</style>