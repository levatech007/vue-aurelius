<template>
  <section class="row">
    <div class="col-lg-4">
      <TextInput />
      <div class="buttons">
      <SquareButton
      v-for="(icon,idx) in icons"
      v-bind:key="idx"
      />
    </div>
    </div>
    <div class="col-lg-4">
      <TextInput
        v-for="(label,idx) in labels"
        v-bind:key="idx"
        v-bind:lbl="label.name"
      />
    </div>
    <div class="col-lg-4">
      <TextInput
        v-for="(label,idx) in labels"
        v-bind:key="idx"
        v-bind:lbl="label.name"
      />
    </div>
  </section>
</template>

<script>
import TextInput from '../components/TextInput.vue'
import SquareButton from '../components/SquareButton.vue'
export default {
  name: 'ClaimInfo',
  components: {
    TextInput,
    SquareButton
  },
  data: function() {
    return {
        labels: [
          {name: 'Started'},
          {name: 'Claim Handler'},
          {name: 'Status'}
        ],
        icons: [{name: '1'},{name: '2'},{name: '3'},{name: '4'},{name: '5'},{name: '6'}]
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
.buttons {
  margin-top: 10px;
}
</style>
