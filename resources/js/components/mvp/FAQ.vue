<template>
  <div class="faq">
    <div class="faq__title text-center my-3">
      Frequently Asked Questions
    </div>
    <div class="my-16">
      <v-expansion-panels
        multiple
        accordion
      >
        <v-expansion-panel
          v-for="(item, index) in faqs"
          :key="index"
          class="faq_panel"
        >
          <v-expansion-panel-header
            class="faq__header"
            color="#121A2E"
          >
            {{ item.question }}
          </v-expansion-panel-header>
          <v-expansion-panel-content
            class="faq__content"
            color="#121A2E"
          >
            {{ item.answer }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',

  data () {
    return {
      faqs: [
        {
          question: 'Who can attend TNC?',
          answer: 'True North Conference is a 2 day conference that is open to any young adult (ages 18-39). TNC is open to everyone! Register as an \"SFC+\" to indicate that you are not a current SFC member.',
        },
        {
          question: 'How often does TNC happen?',
          answer: 'answer revealed here'
        },
        {
          question: 'Who is Singles for Christ',
          answer: 'answer revealed here'
        },
        {
          question: 'Will sessions be recorded?',
          answer: 'answer revealed here'
        },
        {
          question: 'Is TNC free?',
          answer: 'answer revealed here'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.faq {
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

  &__title {
    font-size: 72px;
    line-height: 90px;
    font-weight: 700;

    @media only screen and (max-width: 600px) {
      font-size: 36px;
      line-height: 44px;
    }
  }

  &__header {
    font-size: 36px;
    line-height: 44px;
    border-color: #fff !important;

    @media only screen and (max-width: 600px) {
      font-size: 20px;
      line-height: 30px;
    }
  }

  &__content {
    font-size: 20px;
    line-height: 30px;

    @media only screen and (max-width: 600px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
}

::v-deep .theme--light.v-expansion-panels .v-expansion-panel {
  background-color: #121A2E;
  color: #fff;
}

::v-deep .v-expansion-panels {
  border-color: #fff;
}
</style>