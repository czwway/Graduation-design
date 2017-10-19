<template>
  <div id="index" class="index">
	  <topheader></topheader>
    <leftnav></leftnav>
    <div class="rightdiv" id="rightdiv">
      <breadcrumb></breadcrumb>
      <router-view class="rightdiv_view"></router-view>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
import leftnav from '../../components/leftnav'
import topheader from '../../components/topheader'
import breadcrumb from '../../components/breadcrumb'


export default {
  
  components: {
    leftnav,
    topheader,
    breadcrumb
  },
  data() {
    return {
      msg: [1,2,3]
    }
  },
  methods: {
    
  },

  //监听点击
  created() {
      this.$root.Bus.$on('shrink', function () {
          if(document.querySelector('#rightdiv').style.paddingLeft){
              document.querySelector('#rightdiv').style.paddingLeft = '';
          }else{
              document.querySelector('#rightdiv').style.paddingLeft = '100px';
          }
      })
  },
  beforeDestroy() {
      this.$root.Bus.$off('shrink')
  },
}



</script>

<style scoped>
.index{
  position: relative;
}
.rightdiv{
  padding-left: 240px;
  padding-top: 50px;
  width: 100%;
  height: 150vh;
  transition: all 1s;
  z-index: 100;
}
.rightdiv_view{
  margin: 0 20px;
}
</style>
