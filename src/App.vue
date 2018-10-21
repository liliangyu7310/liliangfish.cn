<template>
  <div id="app">
    123
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  
  
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
  background: #f9f9f9;
  overflow: auto;
}
ul,li {
  list-style-type: none;
}
img {max-width: 100%;}
h4 {font-weight: 500}
a {color: #000DFF;}

</style>
