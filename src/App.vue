<template>
  <div>
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'app',
  components: {
    'navigation': Navigation
  }
}
</script>

<style>
</style>
