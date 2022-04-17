<template>
  <div class="testimony">
    <v-card
      class="testimony__card"
      color="#1D2939"
      width="100%"
      height="525"
    >
      <div class="testimony__message my-4">
        Every single man and woman all over the world
        <span class="testimony__message--gradient">experiencing Christ.</span>
      </div>
      <div class="testimony__author">
        Neil Yapp
      </div>

      <v-img
      class="testimony__image"
      :src="imgSrc"
      :width="$vuetify.breakpoint.xsOnly ? '288' : '520'"
      :height="$vuetify.breakpoint.xsOnly ? '324' : '479'"
    />
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Testimony',

  data () {
    return {
      imgSrc: '/images/testimony/testimony.png'
    }
  }
}
</script>


<style scoped lang="scss">
.testimony {
  min-height: 100vh;
  margin-top: 100px;

  &__card {
    font-family: "Outfit", sans-serif;
    color: #fff;
    position: relative;
    padding: 100px 80px;

    @media only screen and (min-width: 600px) and (max-width: 960px) {
      padding: 70px 40px;
    }

    @media only screen and (max-width: 600px) {
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__message {
    font-size: 72px;
    font-weight: 500;
    line-height: 90px;

    @media only screen and (max-width: 600px) {
      font-size: 36px;
      font-weight: 500;
      line-height: 44px;
    }

    &--gradient {
      background: linear-gradient(90deg, #444CE7 0%, #9E77ED 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__author {
    font-size: 30px;
    line-height: 38px;

    @media only screen and (max-width: 600px) {
      font-size: 20px;
      line-height: 30px;
    }
  }

  &__image {
    position: absolute;
    top: 300px;
    right: 80px;

    @media only screen and (min-width: 600px) and (max-width: 960px) {
      top: 450px;
      right: 40px;
    }

    @media only screen and (max-width: 600px) {
      top: 420px;
      right: 20px;
    }
  }
}
</style>