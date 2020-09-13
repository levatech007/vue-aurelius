<template>
  <div class='col-lg-4'>
    <button>
      <font-awesome-icon
        :icon="['fas', icon]"
        :style="{ color: '#409AFF' }"
        size="2x"
      />
      <p>{{ title }}</p>
    </button>
  </div>
</template>

<script>

export default {
  name: 'OvalButton',
  props: {
    icon: String,
    title: String
  }

}
</script>

<style scoped>
button {
  background: #FFF;
  width: 100%;
  border-radius: 100px;
  margin-top: 50px;
  border: none;
  border: 1px solid #DDEDFF;
  box-shadow: 0 0 20px rgba(146,160,176,0.38);
  padding: 10px 0;
}
button p {
  display: inline-block;
  margin: 0;
}
</style>
