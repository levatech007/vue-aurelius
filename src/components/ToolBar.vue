<template>
  <section>
      <table class="table table-borderless">
        <thead>
          <tr class="headers">
            <th scope="col">Payment Schedule</th>
            <th scope="col">Sum</th>
            <th scope="col">Paid</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Principal</td>
            <td>134.96</td>
            <td>0.00</td>
            <td>134.96</td>
          </tr>
          <tr>
            <td>Late Interest</td>
            <td>17.89</td>
            <td>0.00</td>
            <td>17.89</td>
          </tr>
          <tr>
            <td>Damages</td>
            <td>20.00</td>
            <td>0.00</td>
            <td>20.00</td>
          </tr>
          <tr class="total">
            <th>Total</th>
            <th>172.85</th>
            <th>0.00</th>
            <th>172.85</th>
          </tr>
        </tbody>
      </table>
  </section>
</template>

<script>
// import Accordion from '../components/Accordion'
export default {
  name: 'ToolBar',
  components: {
    // Accordion
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tbody tr {
  background: #FFF;
}
.total {
  background: #D7E9FF;
}
</style>
