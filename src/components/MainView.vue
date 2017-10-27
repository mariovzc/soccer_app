<template>
  <div>
    <tab-view></tab-view>
  </div>
</template>

<script>
import Tabs from '@/components/TabsView'

export default {
  name: 'MainView',
  components: {
    'tab-view': Tabs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
