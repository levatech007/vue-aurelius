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

<style>
.vs--searchable .vs__dropdown-toggle {
  cursor: pointer;
}
.vs__clear svg {
  display:none;
}
.vs__dropdown-toggle {
  padding: 4px 0;
}
</style>
