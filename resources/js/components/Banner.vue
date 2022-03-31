<template>
  <v-card
    class="banner"
    color="#2D31A6"
    height="auto"
    width="100%"
  >
    <div class="banner__message d-flex justify-center align-center">
      <StarIcon />
      <div class="mx-3">
        <strong>Register before</strong>
        April 15, 2022
        <strong>for a chance to win an early bird prize.</strong>
      </div>
      <StarIcon
        v-if="!$vuetify.breakpoint.xsOnly"
      />
    </div>
  </v-card>
</template>

<script>
import StarIcon from '../components/StarIcon'

export default {
  name: 'Banner',

  components: {
    StarIcon
  },

  data () {
    return {
      iconSrc: '/images/star-icon.png'
    }
  }
}
</script>


<style scoped lang="scss">
.banner {
  &__message {
    font-family: "Outfit", sans-serif;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 78px;

    @media only screen and (max-width: 600px) {
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      padding: 20px 40px;
    }
  }
}
</style>