<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <div class="logo-con" style="text-align: center;">
                    <img :src="logo" style="width: 150px; height: 50px; padding-top: 8px"/>
                </div>
                <Submenu v-for="item in menuData" :name="item.name" :key="item.id">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        {{item.label}}
                    </template>
                    <MenuItem v-for ="mi in item.menuitems" :name="mi.name" :key="mi.id">{{mi.label}}</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                <div :style="{float: 'right'}">
                    <router-link :to="('/login')">返回首页</router-link>
                    |
                    <router-link :to="('/login')">退出</router-link>
                </div>
            </Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>用户列表</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
                        <router-view></router-view>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
    import logo from '../../assets/images/logo1.png'
    export default {
        data () {
            return {
            menuData:[],
            logo
            }
        },
        methods:{
            getMenuData(){
            let _this = this;
            this.request('MenuList', '', false).then((res) => {
                if (res.status) {
                    //菜单数据
                    _this.menuData = res.data;
                } else {
                    //菜单数据
                    _this.menuData = [];
                }
            });
            }
        },
        mounted () {
            this.getMenuData()
        }
    }
</script>