<template>
  <div class="row">
    <div class="col-lg-3">Label</div>
    <div class="col-lg-9">
      <VSelect :options="options"/>
    </div>
  </div>
</template>

<script>
import VSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  name: 'Dropdown',
  components: {
    VSelect
  },
  props: {
    options: Array
  }
}

</script>

<style scoped>
</style>
