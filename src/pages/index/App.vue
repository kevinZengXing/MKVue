<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="axios" @click='ajaxTest()'>测试axios</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    ajaxTest: function () {
      this.$get('/activity.htm', {currentPage: 18, pageSize: 3})
        .then(
          res => {
            console.log(res)
          }
        )
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.axios {
  cursor:pointer;
}
</style>
