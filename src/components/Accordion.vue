<template>
  <vsa-list>
  <!-- Here you can use v-for to loop through items  -->
  <vsa-item v-for="(el,idx) in elements"
  v-bind:key="idx">
    <vsa-heading>
      This is the heading
      {{ el.heading }}
    </vsa-heading>

    <vsa-content>
      This is the content
      {{ el.content }}
    </vsa-content>
  </vsa-item>
</vsa-list>
</template>

<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

export default {
  name: 'Accordion',
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent
  },
  data: function() {
    return {
        elements: [
          {data: 'Test 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec ligula imperdiet, laoreet odio eget, euismod nibh. Etiam fringilla commodo blandit. Duis vitae dignissim ipsum, quis auctor sapien'},
          {data: 'Test 2', content: 'Integer euismod tortor in nisi aliquet, ut semper enim facilisis. Duis mollis fringilla nisl, quis molestie nisl molestie ut. Ut imperdiet ornare ligula, nec egestas nisi faucibus vel.'},
          {data: 'Test 3', content: 'Ut venenatis turpis nisi, id imperdiet ipsum eleifend ut. Fusce malesuada id eros at tempor. Cras eu odio aliquet massa imperdiet fringilla. Aliquam erat volutpat.'}
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vsa-list {
  background: none;
  --vsa-max-width: none;
  --vsa-heading-padding: 0.5rem 0.5rem;
}
.vsa-item {
  background: #FFF;
}

</style>
