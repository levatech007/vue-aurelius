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
        <div class="row ovals">
          <OvalButton
          v-for="(btn,idx) in ovalButtons"
          v-bind:key="idx"
          v-bind:title="btn.name"
          v-bind:icon="btn.icon"
          />
        </div>
        <Tabs />
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
import Tabs from '../components/Tabs.vue'
import Data from '../../data.json'

export default {
  name: 'Main',
  components: {
    ClaimInfo,
    ToolBar,
    Reporting,
    OvalButton,
    Tabs
  },
  data: function() {
    return {
        ovalButtons: JSON.parse(JSON.stringify(Data.ovalButtons)),
      }
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
.ovals {
  margin-bottom: 50px !important;
}
</style>
