<template>
  <div>
    <league-list></league-list>
  </div>
</template>

<script>
import LeagueList from '@/components/LeagueList'

export default {
  name: 'MainView',
  components: {
    'league-list': LeagueList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
