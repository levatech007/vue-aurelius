<template>
  <section>
      <table class="table table-borderless">
        <thead>
          <tr class="headers">
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">User</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo,idx) in allTodos" :key="idx">
            <td v-for="(item,idx) in todo.todo" :key="idx">
              {{item}}
            </td>
          </tr>
        </tbody>
      </table>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ToolBar',
  computed: mapGetters(['allTodos'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tbody tr {
  background: #F1F7FB;
}
</style>
