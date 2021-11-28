<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    window.addEventListener('unload',this.saveState());  //监听刷新事件
    console.log('window.addEventListener');
  },
  methods:{
    saveState(){

      sessionStorage.setItem('state',JSON.stringify(this.$store.state.user));
      console.log(JSON.stringify(this.$store.state.user))
      console.log('sessionStorage.setItem');
      console.log("sessionStorage.getItem('state'):"+sessionStorage.getItem('state'));
      // sessionStorage.getItem('state')?JSON.parse(sessionStorage.getItem('state')):
    }
  }
}
</script>

<style>
</style>
