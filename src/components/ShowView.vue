<template>
  <div>
    <v-tabs dark fixed centered >
      <v-tabs-bar class="cyan">
        <v-tabs-slider class="yellow"></v-tabs-slider>
        <v-tabs-item
          v-for="i in items"
          :key="i"
          :href="'#tab-' + i"
        >
          {{ i }}
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content
          :id="'tab-Table'"
        >
          <v-card flat>
            <v-card-text><table-league></table-league></v-card-text>
          </v-card>
        </v-tabs-content>
        <v-tabs-content
          :id="'tab-Teams'"
        >
          <v-card flat>
            <v-card-text><team-list></team-list></v-card-text>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </div>  
</template>
<script>
  import TableLeague from '@/components/TableLeague'
  import TeamList from '@/components/TeamList'

  export default {
    name: 'ShowView',
    data () {
      return {
        items: ['Table', 'Teams'],
        text: ['content', 'content2']
      }
    },
    components: {
      'table-league': TableLeague,
      'team-list': TeamList
    }
  }
</script>
<style scoped>
</style>
