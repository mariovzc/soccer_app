<template>
  <div class="league-list" v-if="done">
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-list two-line subheader>
            <template v-for="(item, index) in leagues">
            <v-list-tile avatar ripple v-bind:key="index">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.caption }} {{item.league}}</v-list-tile-title>
                <v-list-tile-sub-title class="grey--text text--darken-4">Matchday: {{ item.currentMatchday }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>Last update: {{ item.lastUpdated | formatDate }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <a v-bind:href="'#/leage/' + item.id" class="btn btn--icon btn--raised">
                  <v-icon color="light-blue darken-4">remove_red_eye</v-icon>        
                </a>
              </v-list-tile-action>
            </v-list-tile>
            <hr class="c-divider" v-bind:key="index">
          </template>
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
  import router from 'vue-router'

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
    },
    methods: {
      show: (id) => {
        router.push({path: 'league', params: { id: id }})
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
  .c-divider{
    border: none;
    display: block;
    height: 1px;
    min-height: 1px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    background-color: rgba(0,0,0,.12) !important;
  }
</style>
