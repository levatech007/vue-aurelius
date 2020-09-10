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
        <div class="row">
          <OvalButton />
        </div>
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
import OvalButton from '../components/OvalButton.vue'
export default {
  name: 'Main',
  components: {
    ClaimInfo,
    ToolBar,
    Reporting,
    OvalButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.row {
  margin: 0;
}
main {
  margin: 0 25px;
}
</style>
