<template>
  <div
    class="app-flow-buttons d-flex my-9 mx-auto"
    :class="showBack ? 'justify-space-between' : 'justify-center'"
  >
    <v-btn
      v-if="showBack"
      class="app-flow-buttons__back my-2"
      color="#3538CD"
      height="60px"
      width="366px"
      outlined
      @click="navigateBack"
    >
      {{ backText }}
    </v-btn>

    <v-btn
      class="app-flow-buttons__continue my-2"
      color="#444CE7"
      height="60px"
      width="366px"
      depressed
      @click="navigateContinue"
    >
      {{ continueText }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AppFlowNavButtons',

  props: {
    showBack: {
      type: Boolean,
      default: true,
      required: false
    },

    backText: {
      type: String,
      default: 'Back',
      required: false
    },

    showContinue: {
      type: Boolean,
      default: true,
      required: false
    },

    continueText: {
      type: String,
      default: 'Continue',
      required: false
    },
  },

  methods: {
    navigateBack () {
      this.$emit('back')
    },

    navigateContinue () {
      this.$emit('continue')
    }
  }
}
</script>

<style scoped lang="scss">
.app-flow-buttons {
  font-family: "Outfit", sans-serif;
  max-width: 100%;
  
  &__back {
    color: #3538CD !important;
    text-transform: none;
    border-radius: 8px;
    font-size: 18px !important;
    max-width: 30%;
  }

  &__continue {
  font-size: 18px !important;
    color: #fff;
    text-transform: none;
    border-radius: 8px;
    max-width: 60%;
  }
}
</style>