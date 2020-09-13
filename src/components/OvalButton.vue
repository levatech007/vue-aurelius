<template>
  <div class='col-lg-4'>
    <div class="oval">
      <font-awesome-icon
        :icon="['fas', icon]"
        :style="{ color: '#409AFF' }"
        size="2x"
      />
      {{ title }}
    </div>
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
.oval {
  text-align: center;
  background: #FFF;
  border-radius: 100px;
  margin: 0 auto;
  margin-top: 50px;
  border: none;
  border: 1px solid #DDEDFF;
  box-shadow: 0 0 20px rgba(146,160,176,0.38);
  padding: 7px 0;
  vertical-align: middle;
}
.oval p {
  display: inline-block;
  margin: 0;
  vertical-align: middle;
}
</style>
