<template>
  <div class="league-list" v-if="done">
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-list two-line subheader>
            <v-list-tile avatar v-for="league in leagues" v-bind:key="league.caption" @click="">
              <v-list-tile-content>
                <v-list-tile-title class="title">{{ league.caption }} - Match day: {{ league.currentMatchday }}</v-list-tile-title>
                <v-list-tile-sub-title class="sub-title"> last update {{ league.lastUpdated | formatDate }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">remove_red_eye</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
  <div v-else class="progress">
    <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-list two-line subheader>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title class="title"> <v-progress-linear v-bind:indeterminate="true"></v-progress-linear></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    data () {
      return {
        done: false,
        leagues: []
      }
    },
    created () {
      let config = {
        headers: {
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZjM0OGNjYTA4Y2RiZmEyNDQ1YzRhZSIsImlhdCI6MTUwOTExOTE2N30.aLpmpCRBO1cM-96zZFSCDQ1y7FmTNNgLFlujy48kkR8'
        }
      }
      axios.get('http://localhost:3000/api/all', config)
       .then(response => {
         // JSON responses are automatically parsed.
         this.leagues = response.data
         this.done = true
       })
       .catch(e => {
         alert('Error')
       })
    },
    filters: {
      formatDate: (value) => {
        return moment(String(value)).startOf('day').fromNow()
      }
    }
  }
</script>
<style  scoped>
  .league-list{
    margin-top: 20px;
  }
  .title{
    color: rgba(0,0,0,.87);
  }
  .sub-title{
    color: #BDBDBD;
  }
  .progress{
    margin-top: 20px;
  }
</style>
