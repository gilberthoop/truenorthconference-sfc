<template>
  <div class="video-streams">
    <iframe
     class="video-streams__frame"
     src="https://www.youtube.com/embed/HGXIApA-xL0"
     title="YouTube video player"
     frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoStream',

  data () {
    return {
      saturdayLink: 'https://www.youtube.com/embed/HGXIApA-xL0'
    }
  }
}
</script>

<style scoped lang="scss">
.video-streams {
  &__frame {
    width: 831px;
    height: 467px;

    @media only screen and (max-width: 960px) {
      max-width: 600px;
      height: 380px;
    }

    @media only screen and (max-width: 600px) {
      width: 100%;
      height: 240px;
    }
  }
}
</style>