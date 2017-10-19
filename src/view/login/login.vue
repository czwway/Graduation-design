<template>
  <div id="login" class="login">

    <section class="login-content">
      <h3>微信点餐管理系统</h3>
      <p>WeChat order management system</p>
      <Input type="text" placeholder="username" v-model="username"></Input>
      <Input type="password" placeholder="password" v-model="password"></Input>
      <div class="buttondiv">
        <Button type="success" long v-on:click="login">登录</Button>
      </div>
      <Alert type="error" show-icon v-if="isShowAlert">{{ alertText }}</Alert>
    </section>
    
  </div>
</template>

<script>
export default {
        data () {
            return {
                username: '',
                password: '',
                isShowAlert: false,
                alertText: ''
            }
        },
        methods: {
          login: function(){
            let usernameTest = /^[a-zA-Z0-9_-]{4,16}$/;
            let passwordTest = /^[a-zA-Z0-9_-]{6,16}$/;
            // let passwordTest = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
            if(!usernameTest.test(this.username.trim())){
              this.isShowAlert = true;
              this.alertText = "请输入4-16位登录用户名";
              return false;
            }else if(!passwordTest.test(this.password.trim())){
              this.isShowAlert = true;
              this.alertText = "请输入6-16位登录密码";
              return false;
            }else{
              this.isShowAlert = false;
              this.alertText = "";
            }
            console.log("开始axios")
            this.$ajax.get('http://g.cn').then(res=>{
              console.log(res.data);
              this.username = res.data.name;

            }).catch(function (response) {
              console.log(response);
            });
            console.log("结束axios")



            sessionStorage.setItem('accessToken','login');
            this.$router.push({ path: 'index' })



          },//login
          fetchDate: function(){
            let message = this.$route.query.message;
            console.log("路由："+message)
            if(message == undefined){
              this.isShowAlert = false;
            }else{
              this.isShowAlert = true;
              this.alertText = message;
            }
          }
        },//methods
        watch: {
          "$route": "fetchDate"
        }
}
</script>

<style scoped>
.login{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: -webkit-linear-gradient(red, blue); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(red, blue); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(red, blue); /* Firefox 3.6 - 15 */
    background: linear-gradient(#0040ff,#0080ff,white,orange); /* 标准的语法 */
}
.login .login-content{
    width: 300px;
    height: 300px;
    margin: 0 auto;
    border-radius: 50%;
    background: #65c9d6;
    -webkit-box-shadow: 0px 0px 10px 10px rgba(255,255,255,.2);
    box-shadow: 0px 0px 10px 10px rgba(244,245,244,.2);
}
.login .login-content h3{
    margin-top: 60px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}
.login .login-content p{
  text-align: center;
  font-size: 12px;
}
.login .ivu-input-wrapper{
    display: block;
    width: 80%;
    margin: 11px auto;
} 
.login .buttondiv{
    width: 50%;
    margin: 0 auto;
}
.login .ivu-alert-error{
  margin-top: 10px;
}
</style>
