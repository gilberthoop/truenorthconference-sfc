<template>
  <v-app>
    <div class="participants-table pa-7 pa-sm-12">
      <div class="participants-table__title">SFC True North Conference Participants</div>

      <v-text-field
        v-model="search"
        label="Search a name (case-sensitive)"
        class="mx-auto mx-sm-10"
      />
      <v-data-table
        :headers="headers"
        :items="participants"
        :items-per-page="10"
        :search="search"
        :custom-filter="filterName"
        :loading="loading"
        loading-text="Loading information..."
        class="participants-table__data elevation-1"
        light
      />
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Participants',

  data () {
    return {
      loading: false,
      search: '',
      participants: [],
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name'
        },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Region',
          value: 'region'
        }
      ]
    }
  },

  mounted () {
    this.getParticipants()
  },

  methods: {
    async getParticipants () {
      try {
        this.loading = true

        const { data } = await axios.get('/api/participants')
        // Populate each participant table row with name, email and region
        data.forEach(participant => {
          this.participants.push({
            name: participant.name,
            email: participant.email,
            region: participant.region
          })
        })
      } catch (error) {
        console.log(error)
      }

      this.loading = false
    },

    filterName (value, search, item) {
      console.log('filterName')
      return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().indexOf(search) !== -1
    }
  }
}
</script>

<style scoped lang="scss">
.participants-table {
  font-family: "Outfit", sans-serif !important;
  color: #101828 !important;

  &__title {
    font-family: "Outfit", sans-serif !important;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;

    @media (min-width: 600px) {
      font-size: 36px;
    }
  }
}
</style>
