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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
