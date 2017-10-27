<template>
  <v-toolbar dark color="primary">
    <v-toolbar-title class="white--text">Soccer Api</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link tag="button" to="/" class="btn btn--flat btn--raised link">
      <span>Leagues</span>
    </router-link>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      active: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .link span{
    color: #fff;
  } 
</style>
