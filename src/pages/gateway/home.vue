<style>
    .gateway-home-main {
        margin-top: 66px;
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
    <div>
        <div>
            <Menu mode="horizontal" :theme="light" active-name="1">
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
                            <MenuItem name="3-1">风景</MenuItem>
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
            <div class="gateway-home-main">
                <div class="gateway-home-issue">
                    <div class="gateway-home-row">
                        <router-view/>
                    </div>
                </div>
            </div>
            <div>
            </div>
    </div>
    
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>
    