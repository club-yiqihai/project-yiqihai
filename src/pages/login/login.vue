<style>
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
<div id="login">
    <div><h2>用户登陆</h2></div>
    <div style="margin-top: 6px">
        <Input prefix="ios-contact" placeholder="用户名" style="width: auto" size="large" :clearable="true"/>
    </div>
    <div style="margin-top: 6px">
        <Input prefix="md-key" type="password" placeholder="密码" style="width: auto" size="large" :clearable="true"/>
    </div>
    <div style="margin-top: 6px">
        <Button type="success" @click="login()" style="width: 211px">登陆</Button>
    </div>
</div>
</template>
<script>
    import {mapActions} from 'vuex';
    export default {
        data () {
            return {

            }
        },
        methods: {
            ...mapActions(['addSideMenu', 'userLogin']),
            login(){
                //进行校验
                //校验通过
                setTimeout(() => {
                    //后台请求校验
                    this.request('UserLogin', this.formLogin).then((resp) => {
                        //响应状态判断
                        if(resp.status){
                            let data = resp.data;
                            let userData = {userInfo: data.userInfo, token: data.token};
                            //通过vuex存储用户信息和菜单信息
                            this.userLogin(userData);
                            //store 菜单
                            //this.addSideMenu(data.menu);
                            this.$Message.success('登录成功!');
                            this.$router.push({path: '/layout'});
                        }else{
                            this.$Message.error(res.msg);
                        }
                    });
                }, 500)
            }
        }
    }
</script>
