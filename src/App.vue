<template>
  <div id="app">
    <index msg="Test 123" viitenumber="7123456789"/>
  </div>
</template>

<script>

import index from './pages/index.vue'

export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
#app {
  margin: 0px;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.row {
  margin: 0;
}
</style>
