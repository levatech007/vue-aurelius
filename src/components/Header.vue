<template>
  <header>
    <h4>Claim {{ viitenumber }}</h4>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    viitenumber: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #263545;
  color: #FFF;
  padding: 10px 0;
}
header h4 {
  margin: 0;
  padding-left: 20px;
}
</style>
