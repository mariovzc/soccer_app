<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link tag="button" to="/" class="btn btn--flat btn--raised">
      <span>Leagues</span>
    </router-link>
    <router-link tag="button" to="register" class="btn btn--flat btn--raised">
      <span>Register</span>
    </router-link>
    <router-link tag="button" to="login" class="btn btn--flat btn--raised">
      <span>Login</span>
    </router-link>
    <router-link tag="button" to="logout" class="btn btn--flat btn--raised">
      <span>Logout</span>
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
  },
  methods: {
    alert_element: () => {
      alert('hi')
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
