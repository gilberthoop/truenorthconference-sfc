<template>
  <div class="faq">
    <div
      id="faq"
      class="anchor">
    </div>

    <div class="faq__title text-center my-3">
      Frequently Asked Questions
    </div>
    <div class="faq__section my-16">
      <v-expansion-panels
        multiple
        accordion
      >
        <v-expansion-panel
          v-for="(item, index) in faqs"
          :key="index"
          ref="panel"
          class="faq_panel"
          @click="onExpandPanel(index)"
        >
          <v-expansion-panel-header
            ref="header"
            class="faq__header py-sm-7 py-md-5"
            color="#121A2E"
            expand-icon="add"
          >
            {{ item.question }}
          </v-expansion-panel-header>
          <v-expansion-panel-content
            class="faq__content pb-2 pb-sm-4"
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
          answer: 'True North Conference is 2 day conference that is open to any young adult (ages 18-39). TNC is open to everyone! If you are currently not an SFC member, please note that in your registration and choose the region and area that best applies to you.',
        },
        {
          question: 'How often does TNC happen?',
          answer: 'SFC Canada’s True North Conference happens once a year. It’s typically held in the spring or summer months.'
        },
        {
          question: 'Who is Singles for Christ',
          answer: 'CFC Singles for Christ (SFC) is one of the Family Ministries of Couples for Christ (CFC). SFC aims to provide a Christian support environment for single men and women who are as the crossroads of their state of life, choosing between marriage, a religious vocation, or single blessedness.'
        },
        {
          question: 'Is TNC free?',
          answer: 'For 2022, True North Conference is a hybrid conference. Our online event is free however if you choose to attend local gathering near your area, there may be a nominal fee to cover venue rentals and food.'
        }
      ]
    }
  },

  methods: {
    onExpandPanel (index) {
      this.$refs.header[index].expandIcon = this.$refs.panel[index].isActive ? 'add' : 'remove'
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

  &__section {
    border-color: #fff;
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
      font-weight: 700 !important;
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
  border: 2px solid #A4BCFD;
  border-radius: 5px
}

::v-deep .theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon {
  color: #A4BCFD;
  font-size: 48px;

  @media only screen and (max-width: 600px) {
    font-size: 32px;
  }
}

::v-deep .theme--light.v-expansion-panels .v-expansion-panel:not(:first-child)::after {
  border-color: #A4BCFD;
}

.anchor {
  display: block;
  position: relative;
  top: -100px;
  visibility: hidden;
}
</style>