<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row headers">
        <div class="col-lg-4">Date</div>
        <div class="col-lg-4">Name</div>
        <div class="col-lg-4">User</div>
      </div>
      <div v-for="(todo,idx) in allTodos" :key="idx" v-b-toggle="'collapse-' + (idx+1)">
        <div class="row">
          <div class="col-lg-4 table-row" v-for="(item,idx) in todo.todo" :key="idx">{{ item }}</div>
          <b-collapse :id="'collapse-' + (idx+1)"><div class="col-lg-10">{{ todo.comment }}</div></b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Accordion',
  computed: mapGetters(['allTodos'])
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
