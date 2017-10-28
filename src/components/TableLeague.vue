<template>
  <div class="">
    <h2>{{name}}</h2>
    <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.rank }}</td>
        <td class="text-xs-right">{{ props.item.team | blankValue }}</td>
        <td class="text-xs-right">{{ props.item.playedGames }}</td>
        <td class="text-xs-right">{{ props.item.points }}</td>
        <td class="text-xs-right">{{ props.item.goals }}</td>
        <td class="text-xs-right">{{ props.item.goalsAgainst }}</td>
        <td class="text-xs-right">{{ props.item.goalDifference }}</td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  import axios from 'axios'
  
  export default {
    name: 'TableLeague',
    data () {
      return {
        done: true,
        headers: [
          {
            text: '',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Rank', value: 'rank' },
          { text: 'Team', value: 'team' },
          { text: 'PlayedGames', value: 'playedGames' },
          { text: 'Points', value: 'points' },
          { text: 'Goals', value: 'goals' },
          { text: 'GoalsAgainst', value: 'goalsAgainst' },
          { text: 'GoalDifference', value: 'goalDifference' }
        ],
        name: '',
        items: []
      }
    },
    created () {
      const config = {
        headers: {
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZjM0OGNjYTA4Y2RiZmEyNDQ1YzRhZSIsImlhdCI6MTUwOTExOTE2N30.aLpmpCRBO1cM-96zZFSCDQ1y7FmTNNgLFlujy48kkR8'
        }
      }
      const id = (location.hash.slice(1)).split('/')[2]
      axios.get('http://localhost:3000/api/leage/' + id, config)
       .then(response => {
         // JSON responses are automatically parsed.
         this.name = response.data.caption
         this.items = response.data.standing
         this.done = true
       })
       .catch(e => {
       })
    },
    filters: {
      blankValue: (value) => {
        if (!value) return 'No field Info'

        return value
      }
    }
  }
</script>
<style scoped>
</style>
