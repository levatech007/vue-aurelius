<template>
  <section class="row">
    <!-- LEFT SECTION -->
    <div class="col-lg-4">
      <div class="row">
        <div class="col-lg-3">Debtor</div>
        <div class="col-lg-9">
          <input placeholder="Jane Doe" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </div>
      </div>
      <div class="row">
      <div class="buttons">
        <SquareButton
        v-for="(btn,idx) in buttons"
        v-bind:key="idx"
        v-bind:cls="btn.style"
        v-bind:icon="btn.icon"
        />
      </div>
    </div>
    </div>
    <!-- RIGHT SECTION -->
    <div class="col-lg-8">
      <div class="row inputs">
        <div class="col-lg-1">Started</div>
        <div class="col-lg-5">
          <input placeholder="Kuupäev siia" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="col-lg-1">Client</div>
          <div class="col-lg-5">
            <input placeholder="John Doe" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
          </div>
      </div>

      <div class="row inputs">
        <div class="col-lg-1">Handler</div>
        <div class="col-lg-5">
          <input placeholder="EVA" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="col-lg-1">Collector</div>
        <div class="col-lg-5">
          <input placeholder="Julianus" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </div>
      </div>

      <div class="row inputs">
        <div class="col-lg-1">Status</div>
        <Dropdown v-bind:options="options" selected="Aktiivne"/>
        <div class="col-lg-1">Handler</div>
        <div class="col-lg-5">
          <input placeholder="AB-122345" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </div>
      </div>

      <div class="row inputs">
        <div class="col-lg-6"></div>
        <div class="col-lg-1">Handler</div>
        <Dropdown v-bind:options="options" selected="Aktiivne inkassomenetlus" />
      </div>
    </div>
  </section>
</template>

<script>
import Dropdown from '../components/Dropdown.vue'
import SquareButton from '../components/SquareButton.vue'
import Data from '../../data.json'


export default {
  name: 'ClaimInfo',
  components: {
    Dropdown,
    SquareButton
  },
  data: function() {
    return {
        icons: [{name: '1'},{name: '2'},{name: '3'},{name: '4'},{name: '5'},{name: '6'}],
        options: ['Aktiivne', 'Kohtus'],
        buttons: JSON.parse(JSON.stringify(Data.buttons))
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
  margin-left: 15px;
}
.inputs {
  margin-bottom: 20px;
}
</style>
