<template>
  <div></div>
</template>

<script>
import TextInput from '../components/TextInput.vue'
export default {
  name: 'ClaimInfo',
  components: {
    TextInput
  },
  data: function() {
    return {
        labels: [
          {name: 'Started'},
          {name: 'Claim Handler'},
          {name: 'Status'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background: lightblue;
  min-height: 200px;
  padding: 25px 0;
}
</style>
