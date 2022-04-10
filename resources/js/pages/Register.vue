<template>
  <v-app>
    <keep-alive>
      <component
        :is="currentPage"
      />
    </keep-alive>
  </v-app>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import PersonDetailsForm from '../components/registration/PersonDetailsForm'
import WorkshopForm from '../components/registration/WorkshopForm'
import AuthMixin from '../mixins/auth-mixin'


export default {
  name: 'Register',

  components: {
    ValidationObserver,
    PersonDetailsForm,
    WorkshopForm
  },

  mixins: [AuthMixin],

  computed: {
    currentPage () {
      const components = {
        1: PersonDetailsForm,
        2: WorkshopForm
      }

      return components[this.step]
    }
  }
}
</script>

<style scoped lang="scss">
</style>