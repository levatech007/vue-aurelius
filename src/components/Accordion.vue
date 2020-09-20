<template>
  <b-row>
    <b-col>
      <b-row class="headers">
        <b-col v-for="(header,idx) in headers" :key="idx">{{ header }}</b-col>
      </b-row>
      <b-row v-for="(row,idx) in contentRows" :key="idx" v-b-toggle="'collapse-' + (idx+1)">
        <b-col class="table-row" :lg="colCount" v-for="(item,idx) in row.row" :key="idx">{{ item }}</b-col>
        <b-collapse :id="'collapse-' + (idx+1)"><b-col lg="10">{{ row.expanded }}</b-col></b-collapse>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>

export default {
  name: 'Accordion',
  props: {
    contentRows: Array,
    headers: Array
  },
  computed: {
    colCount: function() {
      console.log
      return 12 / this.headers.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.headers {
  background: #409AFF;
  color: #FFF;
  padding: 10px 0;
  font-weight: bold;
}
.table-row {
  background: #F1F7FB;
  padding: 10px 0;
}
.collapse {
  width: 100%;
  background: lightgray;
  /* padding: 8px 0; */
  line-height: 40px;
}
.collapse .col-lg-10 {
  border-left: 1px solid gray;
  margin-left: 20px;
}
</style>
