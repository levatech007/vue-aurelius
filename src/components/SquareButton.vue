<template>
  <button :class="style">
    <font-awesome-icon
      :icon="['fas', icon]"
      :style="{ color }"
      size="2x"
    />
  </button>
</template>

<script>
export default {
  name: 'SquareButton',
  props: {
    icon: String,
    cls: String
  },
  computed: {
    style: function() {
      return this.cls;
    },
    color: function() {
      return this.cls == 'blue' ? '#49637E' : '#FFF';
    }
  }
}
</script>

<style scoped>
button {
  height: 65px;
  width: 65px;
  border-radius: 4px;
  margin-right: 35px;
  margin-bottom: 20px;
  border-style: solid;
  border-width: 1px;
}
.button svg {
   fill: #FFF;
}
.green {
  background:  #74BD77;
  border-color: green;
}
.red {
  background:  #FF8B8B;
  border-color: red;
}
.blue {
  background:  #C0D4E9;
  border-color: #1D71A1;
}
</style>
