<template>
  <main>
    <b-row>
      <b-col>
        <ClaimInfo :info="claim.info"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4">
        <Accordion :contentRows="claim.noude_summad" :headers="noudeSummadHeaders"/>
        <b-row class="ovals">
          <OvalButton
          v-for="(btn,idx) in ovalButtons"
          v-bind:key="idx"
          v-bind:title="btn.name"
          v-bind:icon="btn.icon"
          />
        </b-row>
        <Tabs />
      </b-col>
      <b-col lg="8">
        <Accordion :contentRows="claim.todos" :headers="menetluskaikHeaders"/>
      </b-col>
    </b-row>
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
