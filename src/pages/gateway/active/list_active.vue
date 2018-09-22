<style scoped>
    .gateway-active-left {
        position: relative;
        margin-left: 8.33333333%;
        display: block;
        width: 58.33333333%;
        float: left;
        flex: 0 0 auto;
    }

    .gateway-active-right {
        position: relative;
        display: block;
        width: 25%;
        float: left;
        flex: 0 0 auto;
    }

    .active-card {
        margin-bottom: 16px;
    }

    .card-user {
        display: inline-block;
        margin-right: 6px;
    }

    .card-time {
        font-size: 12px;
        vertical-align: middle;
        color: #808695;
    }

    .card-title {
        margin: 12px 0;
        font-weight: 700;
        font-size: 16px;
    }

    .card-stick {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .card-stick-green {
        line-height: 20px;
        background: #f6ffed;
        border-color: #b7eb8f;
    }
</style>
<template>
    <div>
    <div class="gateway-active-left">
        <div>
            <div class="active-card">
                <Card>
                    <div class="card-user">
                        <Poptip title="Title" content="content" placement="bottom" trigger="hover">
                            <a>
                                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                            </a>
                        </Poptip>
                    </div>
                    <div class="card-user">
                        <span>刘翔</span>
                    </div>
                    <Time :time="time3" :interval="1" />
                    <div class="card-title">天津一日游</div>
                    <a>
                        <div></div>
                        <div>你好，亲爱的 iView 开发者（准开发者），很高兴你能使用到我们新上线的 iView 开发者社区。iView 从立项到现在已经经历了两年的时间，7 月  28 日是它两周岁的生日，在这一天，我们荣幸的召开了新品发布会并发布了 iView 3.0。对于初入社区的你，这篇文章将是一个很好的导引，下面就带你玩转 iView Developer。</div>
                    </a>
                    <div style="position: relative;">
                        <Tag color="default" style="margin-top: 12px;">yiqihai</Tag>
                        <div style="font-size: 12px;font-weight: 700;color: #19be6b;position: absolute;bottom: 0;right: 0;">
                            <Tooltip content="共42条回复" placement="bottom" inline>
                                <Icon type="ios-chatbubbles" />
                                    42
                            </Tooltip>
                        </div>
                    </div>
                    <div class="card-stick">
                        <div class="card-sticK-green">
                            <Tag color="green">置顶</Tag>
                        </div>
                    </div>
                </Card>
            </div>
            <div class="active-card">
                    <Card>
                        <div class="card-user">
                            <Poptip title="Title" content="content" placement="bottom" trigger="hover">
                                <a>
                                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                                </a>
                            </Poptip>
                        </div>
                        <div class="card-user">
                            <span>刘翔</span>
                        </div>
                        <Time :time="time3" :interval="1" />
                        <div class="card-title">天津一日游</div>
                        <a>
                            <div></div>
                            <div>你好，亲爱的 iView 开发者（准开发者），很高兴你能使用到我们新上线的 iView 开发者社区。iView 从立项到现在已经经历了两年的时间，7 月  28 日是它两周岁的生日，在这一天，我们荣幸的召开了新品发布会并发布了 iView 3.0。对于初入社区的你，这篇文章将是一个很好的导引，下面就带你玩转 iView Developer。</div>
                        </a>
                        <div style="position: relative;">
                            <Tag color="default" style="margin-top: 12px;">yiqihai</Tag>
                            <div style="font-size: 12px;font-weight: 700;color: #19be6b;position: absolute;bottom: 0;right: 0;">
                                <Tooltip content="共42条回复" placement="bottom" inline>
                                    <Icon type="ios-chatbubbles" />
                                        42
                                </Tooltip>
                            </div>
                        </div>
                        <div class="card-stick">
                            <div class="card-sticK-green">
                                <Tag color="green">置顶</Tag>
                            </div>
                        </div>
                    </Card>
                </div>
                <div class="active-card">
                        <Card>
                            <div class="card-user">
                                <Poptip title="Title" content="content" placement="bottom" trigger="hover">
                                    <a>
                                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                                    </a>
                                </Poptip>
                            </div>
                            <div class="card-user">
                                <span>刘翔</span>
                            </div>
                            <Time :time="time3" :interval="1" />
                            <div class="card-title">天津一日游</div>
                            <a>
                                <div></div>
                                <div>你好，亲爱的 iView 开发者（准开发者），很高兴你能使用到我们新上线的 iView 开发者社区。iView 从立项到现在已经经历了两年的时间，7 月  28 日是它两周岁的生日，在这一天，我们荣幸的召开了新品发布会并发布了 iView 3.0。对于初入社区的你，这篇文章将是一个很好的导引，下面就带你玩转 iView Developer。</div>
                            </a>
                            <div style="position: relative;">
                                <Tag color="default" style="margin-top: 12px;">yiqihai</Tag>
                                <div style="font-size: 12px;font-weight: 700;color: #19be6b;position: absolute;bottom: 0;right: 0;">
                                    <Tooltip content="共42条回复" placement="bottom" inline>
                                        <Icon type="ios-chatbubbles" />
                                            42
                                    </Tooltip>
                                </div>
                            </div>
                            <div class="card-stick">
                                <div class="card-sticK-green">
                                    <Tag color="green">置顶</Tag>
                                </div>
                            </div>
                        </Card>
                    </div>
            <div class="active-card">
                <Card>
                    <div style="text-align:center">
                        <img src="">
                        <h3>A high quality UI Toolkit based on Vue.js</h3>
                    </div>
                </Card>
            </div>
        </div>
        <div class="gateway-active-load-more">
            <Button type="default" long large>
                <span>
                    <span>加载更多</span>
                    <span style="display: none;">加载中...</span>
                </span>
                
            </Button>
        </div>
    </div>
    <div class="gateway-active-right">
        <div>
            <div style="top: 66px; left: 1028.94px; width: 356px;">
                <div style="margin-left: 32px;margin-bottom: 12px;">
                    <Card style="cursor: pointer;padding: 0 4px;margin-bottom: 10px;">
                        <div>优先下载最新版</div>
                    </Card>
                    <Card style="cursor: pointer;padding: 0 4px;margin-bottom: 10px;">
                        <div>领取今日签到奖励</div>
                    </Card>
                    <Card style="cursor: pointer;padding: 0 4px;margin-bottom: 10px;">
                        <div>兑换Q币和彩蛋</div>
                    </Card>
                </div>
                <div style="margin-left: 32px;margin-bottom: 12px;">
                    <Card>
                        <p slot="title">
                            <Icon type="ios-options" />
                            <span>活动选项</span>
                        </p>
                    </Card>
                    <Button type="success" long style="margin-top: 12px;">
                        <Icon type="ios-create-outline" />
                            发起活动
                    </Button>
                </div>
            </div>
            <div style="width: 356px; height: 422px;"></div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        data () {
            return {
                time3: new Date()
            }
        }
    }
</script>