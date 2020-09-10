<template>
  <main>
    <div class="row">
      <div class="col-lg-12">
        <ClaimInfo />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <ToolBar />
      </div>
      <div class="col-lg-8">
        <Reporting />
      </div>
    </div>
  </main>
</template>

<script>
import ClaimInfo from '../components/ClaimInfo.vue'
import ToolBar from '../components/ToolBar.vue'
import Reporting from '../components/Reporting.vue'
export default {
  name: 'Main',
  components: {
    ClaimInfo,
    ToolBar,
    Reporting
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
