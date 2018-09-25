<style>
    .gateway-body {
        background-color: #f8f8f9;
    }

    .gateway-home-main {
        background: #fff;
        margin: 80px auto 15px;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    }

    .gateway-home-issue {
        width: 90%;
        margin: 0 auto;
    }

    .gateway-home-row {
        position: relative;
        margin-left: 0;
        margin-right: 0;
        height: auto;
        zoom: 1;
        display: block;
    }
</style>
<template>
<Layout>
    <div class="gateway-body">
        <div style="position:absolute; z-index:9999">
            <Header :style="{position: 'fixed', width: '100%'}">
                <div style="float: left;"></div>
                <div style="float: left;">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <MenuItem name="1">
                        <Icon type="ios-paper" />
                        首页
                    </MenuItem>
                    <router-link :to="('/gateway/active/listactive')">
                        <MenuItem name="2">
                            <Icon type="ios-people" />
                            活动中心
                        </MenuItem>
                    </router-link>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats" />
                            相册管理
                        </template>
                        <MenuGroup title="个人相册">
                            <router-link :to="('/gateway/album/listmyalbum')">
                                <MenuItem name="3-1">风景</MenuItem>
                                <MenuItem name="3-2">人物</MenuItem>
                                <MenuItem name="3-3">怀旧</MenuItem>
                            </router-link>
                        </MenuGroup>
                        <MenuGroup title="公共相册">
                            <MenuItem name="3-4">风景</MenuItem>
                            <MenuItem name="3-5">人物</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4">
                        <Icon type="ios-construct" />
                        综合设置
                    </MenuItem>
                </Menu>
            </div>
                <div style="float: right">
                    <div class="demo-avatar" style="display: inline-block;">
                        <Avatar icon="ios-person" size="large" />
                    </div>
                    <div>
                        <Icon type="md-notifications-outline"  size="34" inline-block/>
                    </div>
                </div>
            </header>
        </div>
        <Content style="background: #f8f8f9; minHeight: 800px">
            <div class="gateway-home-main">
                    <div class="gateway-home-issue">
                        <div class="gateway-home-row">
                            <router-view/>
                    </div>
                </div> 
            </div> 
        </Content>
    </div> 
</Layout>   
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>
    