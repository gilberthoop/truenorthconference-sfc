import { logIn } from '../utils/auth'

export default {
  data () {
    return {
      bgImgSrc: '/images/registration.png',
      loading: false,
      errorMessage: ''
    }
  },

  computed: {
    step: {
      get () {
        return this.$store.state.step
      },
      set (value) {
        return this.$store.commit('setStep', value)
      }
    },

    name: {
      get () {
        return this.$store.state.name
      },
      set (value) {
        return this.$store.commit('setName', value)
      }
    },

    email: {
      get () {
        return this.$store.state.email
      },
      set (value) {
        return this.$store.commit('setEmail', value)
      }
    },

    password: {
      get () {
        return this.$store.state.password
      },
      set (value) {
        return this.$store.commit('setPassword', value)
      }
    },

    region: {
      get () {
        return this.$store.state.region
      },
      set (value) {
        return this.$store.commit('setRegion', value)
      }
    },

    area: {
      get () {
        return this.$store.state.area
      },
      set (value) {
        return this.$store.commit('setArea', value)
      }
    },

    inPerson: {
      get () {
        return this.$store.state.inPerson
      },
      set (value) {
        return this.$store.commit('setInPerson', value)
      }
    },

    workshop: {
      get () {
        return this.$store.state.workshop
      },
      set (value) {
        return this.$store.commit('setWorkshop', value)
      }
    }
  },

  mounted () {
    window.scrollTo(0, 0)
  },

  methods: {
    async logIn () {
      this.errorMessage = ''
      const validInputs = await this.$refs.observer.validate(); 
      if (!validInputs) return

      try {
        this.loading = true
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/login', {
          email: this.email,
          password: this.password
        })

        logIn()
        this.$store.dispatch('loadUser')
        this.$router.push('/')
      } catch (error) {
        if (error.response?.data?.message) {
          this.errorMessage = 'Sign in failed. Please check your email and password.'
        }
      }

      this.loading = false
    },

    async onRegistrationSubmit () {
      this.errorMessage = ''
      
      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
        region: this.region,
        area: this.area,
        in_person: this.inPerson,
        workshop: this.workshop
      }
  
      try {
        this.loading = true
        const response = await axios.post('/register', user)
        
        //TODO
        if (response.status === 200) {
          // Log participant in
          login()
          // Load participant information
          this.$store.dispatch('loadUser')
          // Redirect to home page
          this.$router.push('/')
        }
      } catch (error) {
        this.errorMessage = error.response.data.message
      }

      this.loading = false
    },

    redirectToHomePage () {
      this.$router.push('/')
    },

    fetchAreas (region) {
      switch (region) {
        case 'Atlantic (QC, NB, NL, NS, PEI)':
          return this.areaList[0]
        case 'Capital (ON)':
          return this.areaList[1]
        case 'Central (MB, SK, NU)':
          return this.areaList[2]
        case 'Mountain (AB, NWT)':
          return this.areaList[3]
        case 'Pacific (BC, YT)':
          return this.areaList[4]
        case 'Pacific (BC, YT)':
          return this.areaList[5]
        default:
          return 'Please select your region above'
      }
    }
  }
}