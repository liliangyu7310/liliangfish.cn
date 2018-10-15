<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from './pages/Index'

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
* {
  padding: 0;
  margin: 0;
}
html,body,#app {
  width: 100%;
  height: 100%;
  background: #f3f6f8;
}
ul,li {
  list-style-type: none;
}
img {max-width: 100%;}
h4 {font-weight: 500}
a {color: #000DFF;}

</style>
