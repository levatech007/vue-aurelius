<template>
  <b-row class="section">
    <!-- LEFT SECTION -->
    <b-col lg="4">
      <b-row>
        <b-col lg="3" class="col-form-label">Debtor</b-col>
        <b-col lg="9">
          <input :placeholder="info.nimi" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </b-col>
      </b-row>
      <b-row>
        <div class="buttons">
          <SquareButton
          v-for="(btn,idx) in buttons"
          v-bind:key="idx"
          v-bind:cls="btn.style"
          v-bind:icon="btn.icon"
          />
        </div>
      </b-row>
    </b-col>
    <!-- RIGHT SECTION -->
    <b-col lg="8">
      <b-row class="inputs">
        <b-col lg="1" class="col-form-label">Started</b-col>
        <b-col lg="5">
          <DatePicker :date="info.solmitud" />
        </b-col>
        <b-col class="col-lg-1 col-form-label">Client</b-col>
          <b-col class="col-lg-5">
            <input :placeholder="info.klient" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
          </b-col>
      </b-row>

      <b-row class="inputs">
        <b-col lg="1" class="col-form-label">Handler</b-col>
        <b-col lg="5">
          <input :placeholder="info.tegeleja" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </b-col>
        <b-col lg="1" class="col-form-label">Collector</b-col>
        <b-col lg="5">
          <input placeholder="Julianus" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </b-col>
      </b-row>

      <b-row class="inputs">
        <b-col lg="1" class="col-form-label">Status</b-col>
        <Dropdown :options="claimStatuses" :selected="info.staatus"/>
        <b-col lg="1" class="col-form-label">Contract</b-col>
        <b-col lg="5">
          <input :placeholder="info.leping" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </b-col>
      </b-row>

      <b-row class="inputs">
        <b-col lg="6"></b-col>
        <b-col lg="1" class="col-form-label">Report Status</b-col>
        <Dropdown :options="reportStatuses" :selected="info.noude_staatus" />
      </b-row>
    </b-col>

  </b-row>
</template>

<script>
import Dropdown from '../components/Dropdown.vue'
import SquareButton from '../components/SquareButton.vue'
import DatePicker from '../components/DatePicker.vue'
import Data from '../../data.json'

export default {
  name: 'ClaimInfo',
  components: {
    Dropdown,
    SquareButton,
    DatePicker
  },
  props: {
    info: Object
  },
  data: function() {
    return {
        options: ['Aktiivne', 'Kohtus'],
        buttons: JSON.parse(JSON.stringify(Data.buttons)),
        claimStatuses: JSON.parse(JSON.stringify(Data.claimStatuses)),
        reportStatuses: JSON.parse(JSON.stringify(Data.reportStatuses))
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
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
.col-lg-1 {
  vertical-align: middle;
}
</style>
