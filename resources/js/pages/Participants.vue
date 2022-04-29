<template>
  <div class="participants-table pa-7 pa-sm-12">
    <div class="participants-table__title">SFC True North Conference Participants</div>

  <div class="d-flex justify-space-around flex-column flex-sm-row align-center">
    <div class="my-3">
      <download-excel
        :data="participants"
        type="csv"
      >
        <v-btn class="participants-table__download-btn">
          Download as CSV
        </v-btn>
      </download-excel>
    </div>

    <div class="my-3">
      <download-excel
        :data="participants"
      >
        <v-btn class="participants-table__download-btn">
          Download as XLS
        </v-btn>
      </download-excel>
    </div>
  </div>

    <v-text-field
      v-model="search"
      label="Search a name"
      class="mx-auto mx-sm-10"
      color="#fff"
    />
    <v-data-table
      :headers="headers"
      :items="participants"
      :items-per-page="10"
      :search="search"
      :loading="loading"
      loading-text="Loading information..."
      class="participants-table__data elevation-1"
    />
  </div>
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
        },
        {
          text: 'Area',
          value: 'area'
        },
        {
          text: 'In Person Gathering',
          value: 'inPerson'
        },
        {
          text: 'Workshop',
          value: 'workshop'
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
            region: participant.region,
            area: participant.area,
            inPerson: participant.in_person,
            workshop: participant.workshop
          })
        })
      } catch (error) {
        console.log(error)
      }

      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
.participants-table {
  font-family: "Outfit", sans-serif !important;
  color: #fff !important;

  &__title {
    font-family: "Outfit", sans-serif !important;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;

    @media (min-width: 600px) {
      font-size: 36px;
    }
  }

  &__download-btn {
    margin: auto;
    text-transform: none;
    font-size: 16px;
  }
}

::v-deep .theme--light.v-label {
  color: #fff;
}

::v-deep .theme--light.v-data-table {
  background-color: #EEF4FF;
}

::v-deep .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
::v-deep .theme--light.v-data-table .v-data-table__empty-wrapper {
  color: #444CE7;
}

::v-deep .theme--light.v-input input {
  color: #fff;
}
</style>
