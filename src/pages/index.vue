<template>
  <div>
    <Header :viitenumber="currentClaim.viitenumber" />
    <Main :claim="currentClaim"/>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
export default {
  name: 'index',
  components: {
    Header,
    Main
  },
  methods: {
      ...mapActions(["fetchClaim"])
  },
  computed: mapGetters(['currentClaim']),
  created() {
    this.fetchClaim()
  }
}
</script>

<style scoped>

</style>
