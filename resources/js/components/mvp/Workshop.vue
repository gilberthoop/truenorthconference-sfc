<template>
  <div class="workshop">
    <div
      id="workshops"
      class="anchor">
    </div>
  
    <div class="workshop__header mb-10">
      <div class="workshop__header-title mb-12 mb-md-15">
        Workshops for 2022
      </div>

      <div class="workshop__header-subtitle mb-12 mb-md-10">
        We offer workshops during our conference as a way to learn new skills,
        have deeper discussions, and to put our faith into action.
      </div>
    </div>

    <div class="workshop__section d-flex flex-column flex-md-row justify-space-between">
    <div class="mr-0 mr-md-4">
      <v-card
        v-for="(workshop, index) in workshopSetA"
        :key="index"
        class="workshop__section d-flex flex-column mb-9 pa-8"
        color="#1D2939"
        :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '625px'"
      >
        <div class="workshop__section-category">
          {{ workshop.category }}
        </div>

        <div class="workshop__section-title mt-4 mb-1">
          {{ workshop.title }}
        </div>

        <div class="workshop__section-b-description mb-2">
          {{ workshop.description }}
        </div>
      </v-card>
      </div>

      <div class="ml-0 ml-md-4">
      <v-card
        v-for="(workshop, index) in workshopSetB"
        :key="index"
        class="workshop__section d-flex flex-column mb-9 pa-8"
        color="#1D2939"
        :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '625px'"
      >
        <div class="workshop__section-category">
          {{ workshop.category }}
        </div>

        <div class="workshop__section-title mt-4 mb-1">
          {{ workshop.title }}
        </div>

        <div class="workshop__section-b-description mb-2">
          {{ workshop.description }}
        </div>
      </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Workshop',

  data () {
    return {
      workshopSetA: [
        {
          category: 'Deepening Prayer Life',
          title: 'Avoiding Dead Air',
          description: 'In this session, participants will be invited to take stock of the quality of their prayer life. They will be explore ways to recognize and overcome spiritual dryness, and to deepen their personal relationship with God.'
        },
        {
          category: 'Conflict Resolution',
          title: 'Dealing with Distortion',
          description: 'In this session, participants will learn how to navigate conflicts in various types of relationships (friends, family members, co-workers, etc). They will be presented with concrete ways to manage and resolve them, and to bring about stronger and healthier relationships.'
        },
        {
          category: 'Media Literacy',
          title: 'Navigating the Noise',
          description: 'This session elaborates the difficulties of navigating information coming from various media sources (e.g new, social, television, etc). Participants will be given tips on how to process information in a sound way, and how to maintain a healthy social-emotional state in this digital noise.'
        }
      ],
      workshopSetB: [
        {
          category: 'Lifestyle',
          title: 'Effective Bandwidth',
          description: 'In this session, participants will explore the common phases modern-day singles go through in life and the relative actions and behaviour exhibited during these phases.'
        },
        {
          category: 'Character',
          title: 'High Definition Faith',
          description: 'In this session, participants will unpack the character of resilience, and how it is plays an important role in facing challenges and obstacles in life. They will explore ways to arrive at triumph while in difficult situations and in life’s many heartbreaks'
        },
        {
          category: 'Healing',
          title: 'Healing Harmonic',
          description: 'This session will unpack the basics of inner healing through the lens of Theology of the Body. Participants will be given tools and advice on how to bring forth healing of wounds from past hurts, and to help them move forward, find wholeness, and live fully.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.workshop {
  font-family: "Outfit", sans-serif;
  color: #fff;
  margin: 120px 80px;
  min-height: 170vh;
  position: relative;

  @media only screen and (min-width: 600px) and (max-width: 960px) {
    margin: 70px 40px;
  }

  @media only screen and (max-width: 600px) {
    margin: 60px 20px;
  }

  &__header-title {
    font-size: 72px;
    font-weight: 700;
    line-height: 90px;

    @media only screen and (max-width: 600px) {
      font-size: 36px;
      line-height: 44px;
    }
  }

  &__header-subtitle {
    font-size: 24px;
    line-height: 32px;
    max-width: 600px;

    @media only screen and (max-width: 960px) {
      max-width: 100%;
    }
  }

  &__section {
    color: #fff;
    border-radius: 14px;
    height: 270px;

    @media (max-width: 1200px) {
      height: 295px;
    }

    @media only screen and (max-width: 1000px) {
      height: 300px;
    }

    @media only screen and (max-width: 960px) {
      height: auto;
    }

    &-category {
      font-size: 18px;
      font-weight: 700;
      line-height: 28px;
      background: linear-gradient(90deg, #444CE7 0%, #9E77ED 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &-title {
      font-size: 36px;
      font-weight: 500;
      line-height: 44px;

      @media only screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 32px;
      }
    }

    &-description {
      font-size: 20px;
      line-height: 30px;
    }
  }
}

.anchor {
  display: block;
  position: relative;
  top: -100px;
  visibility: hidden;
}

</style>