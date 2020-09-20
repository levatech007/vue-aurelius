<template>
    <b-tabs content-class="mt-3" justified>
      <b-tab
        v-for="(tab,idx) in tabs"
        :title="tab.name"
        :key="idx">
        <p>{{ tab.content }}</p>
      </b-tab>
    </b-tabs>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      tabs: [
        {"name": "Test1", "content": "Quisque porta rhoncus congue. Sed at posuere nulla. Praesent urna quam, sodales sit amet porta non, semper quis eros. Nunc in metus ante. Praesent commodo sagittis fringilla. Morbi ac tempor libero. Proin lectus libero, vestibulum quis mi rutrum, porttitor ornare quam. Donec mattis lorem vitae velit egestas lobortis. Donec a ultricies ipsum. Etiam cursus metus et eleifend elementum. Nam id massa sed nisl tincidunt aliquet."},
        {"name":"Test2", "content": "Proin risus dui, pharetra ac aliquet quis, ultrices imperdiet ipsum. Curabitur lacinia, ex in lobortis dignissim, leo ligula luctus magna, non posuere nulla lorem nec purus. Vestibulum imperdiet ultrices facilisis. Fusce sed vehicula libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc arcu nisl, posuere eget leo quis, accumsan aliquet nisi. Etiam euismod turpis sapien, ac condimentum ex interdum laoreet."},
        {"name":"Test3", "content": "Praesent sem sem, sodales sed eleifend quis, semper nec odio. Maecenas bibendum leo elementum, vulputate nulla non, malesuada nisl. Phasellus ipsum nulla, rutrum faucibus arcu nec, tincidunt convallis tortor. Vestibulum ut tellus ac nisl gravida suscipit. Mauris in semper massa. Proin dignissim tempus lectus at varius. Ut vel accumsan nibh. Vivamus gravida quam tellus, id luctus velit porttitor at. Maecenas laoreet aliquet dolor in ornare."}
      ]
    }
  }
}
</script>

<style>
li .nav-item {
  background: #263645;
}
.nav-item a {
  color: #FFF;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  color: #FFF;
  background-color: #409AFF !important;
  border: none !important;
}
.nav-tabs .nav-link {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #263645;
  border: none !important;
}
/* .nav-tabs .nav-link.active {
  background-color: #409AFF !important;
} */
.tab-content {
  min-height: 300px;
  background: #FAF3F3;
  padding: 10px;
}
.mt-3, .my-3 {
  margin-top: none !important;
}
</style>
