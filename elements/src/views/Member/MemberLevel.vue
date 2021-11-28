<template>
  <div>
    会员等级界面{{id}}
  </div>
</template>

<script>
  export default {
    props: ['id'],
    name: 'MemberLevel',
    beforeRouteEnter: (to, from, next) => { //钩子函数,在进入路由之前执行
      console.log("进入会员等级界面");
      next(vm => { // next,相当于可以链式执行,这里调用axios的请求
          vm.getData();//启用getData方法
      });
    },
    beforeRouteLeave: (to, from, next) => { //钩子函数,在离开路由之前执行
      console.log("离开会员等级界面");
      next();
    },
    methods: {
      getData: function() {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/data.json',
        }).then(function(repos) {
          console.log(repos);
        }).catch(function(error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style>
</style>
