<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>        
        <v-list two-line>
          <template v-for="item in items">
            <v-list-tile avatar v-bind:key="item.title" @click="">
              <v-list-tile-avatar>
                <img v-bind:src="item.crestUrl || placeholder_img">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.shortName"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'TeamList',
    data () {
      return {
        items: [],
        placeholder_img: 'http://via.placeholder.com/40x40'
      }
    },
    created () {
      const config = {
        headers: {
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZjM0OGNjYTA4Y2RiZmEyNDQ1YzRhZSIsImlhdCI6MTUwOTExOTE2N30.aLpmpCRBO1cM-96zZFSCDQ1y7FmTNNgLFlujy48kkR8'
        }
      }
      const id = (location.hash.slice(1)).split('/')[2]
      axios.get('http://localhost:3000/api/team/' + id, config)
       .then(response => {
         // JSON responses are automatically parsed.
         this.items = response.data.teams
         this.done = true
         console.log(response.data)
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
