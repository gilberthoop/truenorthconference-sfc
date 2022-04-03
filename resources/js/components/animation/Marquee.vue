<template>
  <div class="marquee">
    <v-img
      class="marquee__element"
      :src="image"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
export default {
  name: 'Marquee',

  props: {
    image: {
      type: String,
      required: false
    },

    text: {
      type: String,
      required: false
    },

    height: {
      type: String,
      required: false
    },

    width: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
.marquee {

  &__element {
    animation: marquee 15s linear infinite;
  }
}

@keyframes marquee {
  0%   { transform: translate(100%, 0); }
  100% { transform: translate(-100%, 0); }
}
</style>