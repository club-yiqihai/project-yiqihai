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
            <Header style="position: fixed; background: #fff; width: 100%; height: 59px; box-shadow: 0 1px 1px rgba(0,0,0,.1);">
                <div style="float: left;"></div>
                <div style="float: left;">
                <Menu mode="horizontal" theme="light" active-name="1">
                    <MenuItem name="1">
                        <div @click="goTo('/gateway/home/home')">
                        <Icon type="ios-paper" />
                        首页
                        </div>
                    </MenuItem>
                    <MenuItem name="2">
                        <div @click="goTo('/gateway/active/listactive')">
                        <Icon type="ios-people" />
                        活动中心
                        </div>
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats" />
                            相册管理
                        </template>
                        <MenuGroup title="个人相册">
                            <MenuItem name="3-1">
                                <div @click="goTo('/gateway/album/listmyalbum')">风景</div>
                            </MenuItem>
                            <MenuItem name="3-2">人物</MenuItem>
                            <MenuItem name="3-3">怀旧</MenuItem>
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
                        <Dropdown style="margin-left: 15px">
                            <a href="javascript:void(0)">
                                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                            </a>
                            <DropdownMenu slot="list" style="width: 140px;">
                                <DropdownItem>驴打滚</DropdownItem>
                                <DropdownItem divided>
                                    <Icon type="ios-person-outline" size="16"/>
                                    <span>我的主页</span>
                                </DropdownItem>
                                <DropdownItem>
                                    <Icon type="ios-settings-outline" size="16"/>
                                    我的活动
                                </DropdownItem>
                                <DropdownItem>
                                    <Icon type="ios-settings-outline" size="16"/>
                                    我的相册
                                </DropdownItem>
                                <DropdownItem divided>  
                                    <Icon type="ios-settings-outline" size="16"/>
                                    设置
                                </DropdownItem>
                                <DropdownItem divided>
                                    <Icon type="ios-log-out" size="16"/>
                                    退出登陆
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div style="display: inline-block; margin-left: 16px">
                        <Poptip title="Title" content="content" placement="bottom-end" trigger="hover">
                            <a href="javascript:void(0)" style="color:rgb(1, 1, 14);">
                                <Icon type="md-notifications-outline" size="30"/>
                            </a>
                        </Poptip>
                    </div>
                    <div style="display: inline-block; margin-left: 13px">
                        <Dropdown>
                            <a href="javascript:void(0)" style="color:rgb(1, 1, 14);">
                                <Icon type="md-add" size="30"/>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>
                                    <Icon type="ios-create-outline" size="16"/>
                                    发起活动
                                </DropdownItem>
                                <DropdownItem>
                                    <Icon type="ios-log-out" size="16"/>
                                    上传照片
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
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
        },
        methods: {
            goTo(params) {
                this.$router.push(params);
            }
        }
    }
</script>
    