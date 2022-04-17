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
import VerifyEmail from '../components/registration/VerifyEmail'
import AuthMixin from '../mixins/auth-mixin'


export default {
  name: 'Register',

  components: {
    ValidationObserver,
    PersonDetailsForm,
    WorkshopForm,
    VerifyEmail
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
  },

  mounted () {
    window.scrollTo(0, 0)

    // if client is already logged in, redirect to home page
    if (this.loggedIn) this.$router.push('/')
  }, 
}
</script>

<style scoped lang="scss">
</style>