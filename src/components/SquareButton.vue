<template>
  <button>
    <font-awesome-icon :icon="['fas', 'user-secret']" />
  </button>
</template>

<script>

export default {
  name: 'SquareButton',
  // props: {
  //   icon: String
  // }

}
</script>

<style scoped>
button {
  height: 70px;
  width: 70px;
  border-radius: 5px;
  margin: 2px;
}
</style>
