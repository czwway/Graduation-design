<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="ajaxGet">test ajaxGet</button>
    <button @click="ajaxPost">test ajaxPost</button>
  </div>
</template>

<script>
export default {
  name: 'ca',
  data () {
    return {
      msg: 'Welcome to c1111111111111111.vue'
    }
  },
  methods:{
    ajaxGet(){
      http.ajaxGet('/api/users', res => {
        console.log(res);
        if (res.status === 200) {}
      });
    },
    ajaxPost(){
      let param = {
        userid: '2121121'
      }
      http.ajaxPost('/api/postusers', param ,res => {
        console.log(res);
        if (res.status === 200) {}
      });
    },




  }
}
</script>


<style scoped>

</style>
