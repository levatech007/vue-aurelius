<template>
  <div>
    <Header/>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin: 0;
}
</style>
