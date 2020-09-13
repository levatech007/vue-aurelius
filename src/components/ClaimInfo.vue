<template>
  <section class="row">
    <div class="col-lg-4">
      <TextInput lbl="Debtor"/>
      <div class="buttons">
      <SquareButton
      v-for="(icon,idx) in icons"
      v-bind:key="idx"
      />
    </div>
    </div>
    <div class="col-lg-4">
      <TextInput
        v-for="(label,idx) in labelsOne"
        v-bind:key="idx"
        v-bind:lbl="label.name"
      />
      <Dropdown />
    </div>
    <div class="col-lg-4">
      <TextInput
        v-for="(label,idx) in labelsTwo"
        v-bind:key="idx"
        v-bind:lbl="label.name"
      />
    </div>
  </section>
</template>

<script>
import TextInput from '../components/TextInput.vue'
import Dropdown from '../components/Dropdown.vue'
import SquareButton from '../components/SquareButton.vue'
export default {
  name: 'ClaimInfo',
  components: {
    TextInput,
    Dropdown,
    SquareButton
  },
  data: function() {
    return {
        labelsOne: [
          {name: 'Started'},
          {name: 'Handler'},
          {name: 'Status'}
        ],
        labelsTwo: [
          {name: 'Client'},
          {name: 'Collector'},
          {name: 'Contract'},
          {name: 'Report Status'}
        ],
        icons: [{name: '1'},{name: '2'},{name: '3'},{name: '4'},{name: '5'},{name: '6'}]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  min-height: 200px;
  padding: 25px 0;
  margin-top: 25px;
}
.buttons {
  margin-top: 30px;
}
</style>
