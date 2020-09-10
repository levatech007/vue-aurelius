<template>
  <section>
    <div class="row reporting">
      Reporting
      <Accordion />
    </div>
  </section>
</template>

<script>
import Accordion from '../components/Accordion'
export default {
  name: 'Reporting',
  components: {
    Accordion
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reporting {
  background: lightpink;
}
</style>
