<template>
  <div>
    <Header viitenumber="712345678" />
    <Main />
  </div>
</template>
<script>

import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
export default {
  name: 'index',
  components: {
    Header,
    Main
  },
  props: {
    msg: String,
    viitenumber: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin: 0;
}
</style>
