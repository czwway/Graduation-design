<template>
  <div class="topheader">
    <div class="f_left">
      <router-link to="/index">
        <h3>微信点餐管理系统后台</h3>
      </router-link>
      <Button type="primary" shape="circle" icon="navicon-round"  @click="shrink"></Button>
    </div>
    <div class="f_right">
      <ul>
        <li>
          <Dropdown>
            <a href="javascript:void(0)">
              <div><Icon type="person"></Icon></div>
              <p>用户：<i>{{ username }}</i></p>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem>北京烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li>
          <a href="javascript:void(0)" onclick="javascript:;">
            <div><Icon type="arrow-down-b"></Icon></div>
            <p>清除缓存</p>
          </a>
        </li>
        <li>

          <Dropdown>
            <a href="javascript:void(0)">
              <div><Icon type="android-settings"></Icon></div>
              <p>系统设置</p>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem>北京烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        
        </li>
        <li>

          <Dropdown>
            <a href="javascript:void(0)">
              <div><Icon type="android-textsms"></Icon></div>
              <p>信息通知</p>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem>北京烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        
        </li>
        <li>
          <a href="javascript:void(0)" @click="logout = true">
            <div><Icon type="log-out"></Icon></div>
            <p>退出</p>
          </a>
        </li>
      </ul>
    </div>
    <Modal
        v-model="logout"
        title="亲爱的管理员，你确定要退出吗？"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>嘤嘤嘤!-!，我会等你回来的。</p>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'admin',
      logout: false
    }
  },
  //事件
  methods: {
    logOut: function(){
      
    },//logOut
    shrink: function(){
      this.$root.Bus.$emit('shrink')
    },

    //退出对话框
    ok () {
      sessionStorage.removeItem('accessToken');
      this.$router.push('/login')
    },
    cancel () {
      this.logout = false;
    }





    
  },//methods


}
</script>


<style scoped>
a{color: #fff;}
.topheader{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  overflow: hidden;
  background: #2b85e4;
  color: #fff;
  z-index: 200;
}
.topheader .f_left{
  display: inline-block;
}
.topheader .f_left button{
  display: inline-block;
  float: left;
  margin-top: 9px;
  margin-left: 20px;
}
.topheader h3{
  line-height: 50px;
  float: left;
  margin-left: 20px;
  font-weight: bold;
  font-size: 18px;
}
.f_right{
  float: right;
  margin-right: 20px;
  height: 50px;
}
.f_right::after{
  content: "";
  clear: both;
}
.f_right .ivu-icon{
    font-size: 24px;
    text-align: center;
    display: list-item;
}
.f_right>ul{
  margin-top: 4px
}
.f_right>ul>li{
  display: inline-block;
  padding-right: 20px;
  padding-left: 20px;
  border-right: 1px solid rgba(255, 255, 255, .3);
}
.f_right>ul>li:last-child{
  border: none;
}
</style>
