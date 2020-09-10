<template>
  <button>
    <font-awesome-icon :icon="['fas', 'phone']"/>
  </button>
</template>

<script>

export default {
  name: 'OvalButton',
  // props: {
  //   icon: String
  // }

}
</script>

<style scoped>
button {
  height: 50px;
  width: 100px;
  border-radius: 50px;
  margin: 2px;
}
</style>
