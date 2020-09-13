<template>
  <button>
    <font-awesome-icon :icon="['fas', 'user-secret']"  :style="{ color: 'white' }" />
  </button>
</template>

<script>

export default {
  name: 'SquareButton',
  props: {
    icon: String,
    background: String,
    color: String,
    border: String
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
  background: #74BD77;
  border: 1px solid green;
}
.icons i,
.button svg {
   fill: #FFF;
}
</style>
