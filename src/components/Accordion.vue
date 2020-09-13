<template>
  <div class="container-fluid">
    <div class="col-lg-12 headers">
      <div class="row">
        <div class="col-lg-4">Date</div>
        <div class="col-lg-4">Name</div>
        <div class="col-lg-4">User</div>
      </div>
    </div>
    <vsa-list>
    <!-- Here you can use v-for to loop through items  -->
    <vsa-item v-for="(el,idx) in elements"
    v-bind:key="idx">
      <vsa-heading>
        <div class="row ">
          <div class="col-lg-4"><font-awesome-icon
            :icon="['fas', 'plus']"
            :style="{ color: '#49637E' }"
            size="lg"
          />
          {{ el.heading }}
        </div>
          <div class="col-lg-4">{{ el.heading }}</div>
          <div class="col-lg-4">User</div>
        </div>

      </vsa-heading>

      <vsa-content>
        This is the content
        {{ el.content }}
      </vsa-content>
    </vsa-item>
  </vsa-list>
</div>
</template>

<script>
import { VsaList, VsaItem, VsaHeading, VsaContent } from 'vue-simple-accordion';
// import 'vue-simple-accordion/dist/vue-simple-accordion.css';

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
          {heading: '11/14/1019 @ 10:33', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec ligula imperdiet, laoreet odio eget, euismod nibh. Etiam fringilla commodo blandit. Duis vitae dignissim ipsum, quis auctor sapien'},
          {heading: '11/09/1019 @ 13:45', content: 'Integer euismod tortor in nisi aliquet, ut semper enim facilisis. Duis mollis fringilla nisl, quis molestie nisl molestie ut. Ut imperdiet ornare ligula, nec egestas nisi faucibus vel.'},
          {heading: '11/14/1019 @ 16.15', content: 'Ut venenatis turpis nisi, id imperdiet ipsum eleifend ut. Fusce malesuada id eros at tempor. Cras eu odio aliquet massa imperdiet fringilla. Aliquam erat volutpat.'}
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.vsa-list {
  --vsa-max-width: none;
  --vsa-heading-padding: 0.5rem 0.5rem;
}
.vsa-item__trigger__icon {
  display: none;
}
.vsa-item__trigger {
  background: #F1F7FC;
  padding: 0.75rem 0;
}
.vsa-item button {
  border: none;
  width: 100%;
  text-align: left;
}
.vsa-list {
  width: 100%;
  background: #F1F7FC;

}
.headers {
  background: #409AFF;
  color: #FFF;
  padding: 10px 0;
  font-weight: bold;
}
</style>
