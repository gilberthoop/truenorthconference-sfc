<template>
  <div class="schedule">
    <div class="schedule__header">
      <div class="schedule__header-title pb-9">
        This weekend's schedule
      </div>

      <div class="schedule__header-timezone">
        Select your timezone
      </div>

      <div class="schedule__header-timezone-select">
        <v-select
          class="my-4"
          v-model="timezone"
          :items="timezones"
          filled
          background-color="#EEF4FF"
          color="#3538CD"
          @change="handleTimezoneSelect(timezone)"
        />
      </div>
    </div>

    <div
      v-if="timezone"
      class="schedule__body"
    >
      <div class="mb-10">
        <div class="schedule__body-text">
          Friday
        </div>
        <div class="schedule__body-subtext">
          *All times are estimates and we will update you if there are any changes.
        </div>
        <div class="schedule__timetable mx-md-auto my-6">
          <v-simple-table class="schedule__timetable-table">
            <template v-slot:default>
              <tbody>
                <tr
                  v-for="(schedule, index) in fridaySchedule"
                  :key="index"
                >
                  <td class="schedule__timetable-time py-6">
                    {{ schedule.time }}
                  </td>
                  <td class="schedule__timetable-topic py-6">
                    <div class="schedule__timetable-topic--title">
                      {{ schedule.title }}
                    </div>
                    <div class="schedule__timetable-topic--subtitle">
                      {{ schedule.subtitle }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </div>

      <div class="mb-10">
        <div class="schedule__body-text">
          Saturday
        </div>
        <div class="schedule__body-subtext">
          *All times are estimates and we will update you if there are any changes.
        </div>
        <div class="schedule__timetable mx-md-auto my-6">
          <v-simple-table class="schedule__timetable-table">
            <template v-slot:default>
              <tbody>
                <tr
                  v-for="(schedule, index) in saturdaySchedule"
                  :key="index"
                >
                  <td class="schedule__timetable-time py-6">
                    {{ schedule.time }}
                  </td>
                  <td class="schedule__timetable-topic py-6">
                    <div class="schedule__timetable-topic--title">
                      {{ schedule.title }}
                    </div>
                    <div class="schedule__timetable-topic--subtitle">
                      {{ schedule.subtitle }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule',

  data () {
    return {
      timezone: null,
      timezones: ['PST', 'MST', 'CST', 'EST'],
      fridaySchedule: [
        {
          id: 1,
          time: '5:00 PM',
          title: 'Opening Ceremonies',
          subtitle: 'Main Stream'
        },
        {
          id: 2,
          time: '5:50 PM',
          title: 'Worship',
          subtitle: 'Main Stream'
        },
        {
          id: 3,
          time: '6:20 PM',
          title: 'Session 1: In Him',
          subtitle: 'Main Stream'
        },
        {
          id: 4,
          time: '7:20 PM',
          title: 'Closing Ceremonies',
          subtitle: 'Main Stream'
        }
      ],
      saturdaySchedule: [
        {
          id: 1,
          time: '8:00 AM',
          title: 'Opening Ceremonies',
          subtitle: 'Main Stream'
        },
        {
          id: 2,
          time: '9:00 AM',
          title: 'Worship',
          subtitle: 'Main Stream'
        },
        {
          id: 3,
          time: '9:30 AM',
          title: 'Session 2',
          subtitle: 'Main Stream'
        },
        {
          id: 4,
          time: '10:30 AM',
          title: 'Mass & Adoration',
          subtitle: 'Main Stream'
        },
        {
          id: 5,
          time: '11:30 AM',
          title: 'Area Fellowship',
          subtitle: 'Main Stream'
        },
        {
          id: 6,
          time: '1:30 PM',
          title: 'Session 3',
          subtitle: 'Main Stream'
        },
        {
          id: 7,
          time: '2:15 PM',
          title: 'Praise Fest',
          subtitle: 'Main Stream'
        },
        {
          id: 8,
          time: '2:50 PM',
          title: 'Closing Ceremony',
          subtitle: 'Main Stream'
        }
      ]
    }
  },

  methods: {
    handleTimezoneSelect (timezone) {
      switch (timezone) {
        case 'MST':
          this.fridaySchedule = this.fridaySchedule.map(schedule => {
            if (schedule.id === 1)
              return { ...schedule, time: '6:00 PM' }
            else if (schedule.id === 2)
              return { ...schedule, time: '6:50 PM' }
            else if (schedule.id === 3)
              return { ...schedule, time: '7:20 PM', }
            else if (schedule.id === 4)
              return { ...schedule, time: '8:20 PM', }
          })

          this.saturdaySchedule = this.saturdaySchedule.map(schedule => {
            if (schedule.id === 1)
              return { ...schedule, time: '9:00 AM' }
            else if (schedule.id === 2)
              return { ...schedule, time: '10:00 AM' }
            else if (schedule.id === 3)
              return { ...schedule, time: '10:30 AM', }
            else if (schedule.id === 4)
              return { ...schedule, time: '11:30 AM', }
            else if (schedule.id === 5)
              return { ...schedule, time: '12:30 PM', }
            else if (schedule.id === 6)
              return { ...schedule, time: '2:30 PM', }
            else if (schedule.id === 7)
              return { ...schedule, time: '3:15 PM', }
            else if (schedule.id === 8)
              return { ...schedule, time: '3:50 PM', }
          })
          break
        case 'CST':
          this.fridaySchedule = this.fridaySchedule.map(schedule => {
            if (schedule.id === 1)
              return { ...schedule, time: '7:00 PM' }
            else if (schedule.id === 2)
              return { ...schedule, time: '7:50 PM' }
            else if (schedule.id === 3)
              return { ...schedule, time: '8:20 PM', }
            else if (schedule.id === 4)
              return { ...schedule, time: '9:20 PM', }
          })

          this.saturdaySchedule = this.saturdaySchedule.map(schedule => {
            if (schedule.id === 1)
              return { ...schedule, time: '10:00 AM' }
            else if (schedule.id === 2)
              return { ...schedule, time: '11:00 AM' }
            else if (schedule.id === 3)
              return { ...schedule, time: '11:30 AM', }
            else if (schedule.id === 4)
              return { ...schedule, time: '12:30 PM', }
            else if (schedule.id === 5)
              return { ...schedule, time: '1:30 PM', }
            else if (schedule.id === 6)
              return { ...schedule, time: '3:30 PM', }
            else if (schedule.id === 7)
              return { ...schedule, time: '4:15 PM', }
            else if (schedule.id === 8)
              return { ...schedule, time: '4:50 PM', }
          })
          break
        case 'EST':
          this.fridaySchedule = this.fridaySchedule.map(schedule => {
            if (schedule.id === 1)
              return { ...schedule, time: '8:00 PM' }
            else if (schedule.id === 2)
              return { ...schedule, time: '8:50 PM' }
            else if (schedule.id === 3)
              return { ...schedule, time: '9:20 PM', }
            else if (schedule.id === 4)
              return { ...schedule, time: '10:20 PM', }
          })
          
          this.saturdaySchedule = this.saturdaySchedule.map(schedule => {
            if (schedule.id === 1)
              return { ...schedule, time: '11:00 AM' }
            else if (schedule.id === 2)
              return { ...schedule, time: '12:00 PM' }
            else if (schedule.id === 3)
              return { ...schedule, time: '12:30 PM', }
            else if (schedule.id === 4)
              return { ...schedule, time: '1:30 PM', }
            else if (schedule.id === 5)
              return { ...schedule, time: '2:30 PM', }
            else if (schedule.id === 6)
              return { ...schedule, time: '4:30 PM', }
            else if (schedule.id === 7)
              return { ...schedule, time: '5:15 PM', }
            else if (schedule.id === 8)
              return { ...schedule, time: '5:50 PM', }
          })
          break
        default:
          this.fridaySchedule = this.fridaySchedule.map(schedule => {
            if (schedule.id === 1)
              return { ...schedule, time: '5:00 PM' }
            else if (schedule.id === 2)
              return { ...schedule, time: '5:50 PM' }
            else if (schedule.id === 3)
              return { ...schedule, time: '6:20 PM', }
            else if (schedule.id === 4)
              return { ...schedule, time: '7:20 PM', }
          })

          this.saturdaySchedule = this.saturdaySchedule.map(schedule => {
            if (schedule.id === 1)
              return { ...schedule, time: '8:00 AM' }
            else if (schedule.id === 2)
              return { ...schedule, time: '9:00 AM' }
            else if (schedule.id === 3)
              return { ...schedule, time: '9:30 AM', }
            else if (schedule.id === 4)
              return { ...schedule, time: '10:30 AM', }
            else if (schedule.id === 5)
              return { ...schedule, time: '11:30 AM', }
            else if (schedule.id === 6)
              return { ...schedule, time: '1:30 PM', }
            else if (schedule.id === 7)
              return { ...schedule, time: '2:15 PM', }
            else if (schedule.id === 8)
              return { ...schedule, time: '2:50 PM', }
          })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.schedule {
  &__header {
    &-title {
      font-size: 48px;
      font-weight: 700;
      line-height: 60px;

      @media only screen and (max-width: 600px) {
        font-size: 30px;
      }
    }

    &-timezone {
      font-size: 24px;
      line-height: 32px;
    }

    &-timezone-select {
      max-width: 210px;
      ::v-deep .theme--light.v-select .v-select__selections {
        color: #3538CD;
        font-weight: 500;
      }
    }
  }

  &__body {
    &-text {
      font-size: 36px;
      line-height: 44px;

      @media only screen and (max-width: 600px) {
        font-size: 30px;
      }
    }

    &-subtext {
      font-size: 20px;
      line-height: 30px;
    }
  }

  &__timetable  {
    max-width: 80%;
    border: 2px solid #A4BCFD;
    border-bottom: none;
    border-radius: 7px;
    font-size: 20px;
    line-height: 30px;

    @media only screen and (max-width: 960px) {
      max-width: 100%;
    }

      &-time {
        margin-right: 200px;
        border-bottom: 2px solid #A4BCFD !important;
      }

      &-topic {
        border-bottom: 2px solid #A4BCFD !important;
      
        &--title {
          font-weight: 700;
        }
        &--subtitle {
          font-weight: 400;
          color: #98A2B3;
        } 
      }
  }
}

::v-deep .v-data-table > .v-data-table__wrapper > table > tbody > tr > td:first-child {
  padding-left: 180px;
  padding-right: 0;

  @media only screen and (max-width: 660px) {
    padding-left: 50px;
  }

  @media only screen and (max-width: 330px) {
    padding-left: 25px;
  }
}

::v-deep .v-data-table > .v-data-table__wrapper > table > tbody > tr > td:nth-child(2) {
  padding-left: 0;
  padding-right: 60px;

  @media only screen and (max-width: 660px) {
    padding-left: 30px;
    padding-right: 0px;
  }

  @media only screen and (max-width: 330px) {
    padding-left: 15px;
  }
}
</style>