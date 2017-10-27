<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Soccer</a>
      <ul id="nav-mobile" class="right">
        <li class="leages" v-on:click="makeActive('leages')"><a href="sass.html">Leagues</a></li>
        <li class="login" v-on:click="makeActive('register')"><a href="badges.html"> Login</a></li>
        <li class="register" v-on:click="makeActive('register')" ><a href="collapsible.html">Register</a></li>
      </ul>
    </div>
  </nav>
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
    makeActive: (item) => {
      this.active = item
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
