<template>
  <div class="row">
    <div class="col-lg-3">
      <p>{{ lbl }}</p>
    </div>
    <div class="col-lg-9">
      <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    lbl: String,
    value: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
