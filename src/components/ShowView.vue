<template>
  <div>
    <v-tabs dark fixed centered>
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
          v-for="i in items"
          :key="i"
          :id="'tab-' + i"
        >
          <v-card flat>
            <v-card-text>{{ text[1] }}</v-card-text>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </div>  
</template>
<script>
  export default {
    name: 'ShowView',
    data () {
      return {
        items: ['Table', 'Teams'],
        text: ['content', 'content2']
      }
    }
  }
</script>
<style scoped>
</style>
