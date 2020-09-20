<template>
  <main>
    <div class="row">
      <div class="col-lg-12">
        <ClaimInfo :info="claim.info"/>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <Accordion :contentRows="claim.noude_summad" :headers="noudeSummadHeaders"/>
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
        <Accordion :contentRows="claim.todos" :headers="menetluskaikHeaders"/>
      </div>
    </div>
  </main>
</template>

<script>
import Accordion from '../components/Accordion'
import ClaimInfo from '../components/ClaimInfo.vue'
import OvalButton from '../components/OvalButton.vue'
import Tabs from '../components/Tabs.vue'
import Data from '../../data.json'

export default {
  name: 'Main',
  components: {
    ClaimInfo,
    OvalButton,
    Tabs,
    Accordion
  },
  props: {
    claim: Object
  },
  data: function() {
    return {
        ovalButtons: JSON.parse(JSON.stringify(Data.ovalButtons)),
        menetluskaikHeaders: ["Date", "Name", "User"],
        noudeSummadHeaders: [this.claim.noude_tyyp, "Sum", "Paid", "Balance"]
      }
  },
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
