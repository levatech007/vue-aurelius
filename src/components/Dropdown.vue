<template>
    <div class="col-lg-5">
      <VSelect :options="options" :value="selected"/>
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
    selected: String,
    options: Array
  }
}

</script>

<style scoped>
</style>
