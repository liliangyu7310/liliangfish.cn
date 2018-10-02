<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from './pages/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body,#app {
  width: 100%;
  height: 100%;
}
ul,li {
  list-style-type: none;
}
</style>
