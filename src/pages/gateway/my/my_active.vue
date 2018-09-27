<template>
    <div style="margin-left: 16.66666667%;display: block;width: 66.66666667%;float: left;flex: 0 0 auto;position: relative;">
        <Card dis-hover shadow>
            <div style="width: 100%;height: 240px;position: relative;padding: 0px;">
                <div style="background-image: url(https://dev-file.iviewui.com/cover_default/large);width: inherit;
                height: inherit;border-radius: 4px 4px 0 0;background-size: cover;background-position: 50%;background-repeat: no-repeat;"></div>
            </div>
            <div style="min-height: 120px;position: relative;">
                <div style="width: 150px;height: 150px;padding: 4px;
                border-radius: 8px;background: #fff;position: absolute;top: -50px;left: 20px;">
                    <img src="https://dev-file.iviewui.com/avatar_default/avatar" style="width: 100%;height: 100%;border-radius: 4px;">
                    <Upload>

                    </Upload>
                </div>
                <div style="margin-left: 190px;padding-top: 10px;">
                    <div style="display: inline-block;font-weight: 700;font-size: 20px;vertical-align: middle;">
                        驴打滚
                    </div>
                    <div style="display: inline-block;margin-left: 4px;">
                        <img src="https://file.iviewui.com/dev-dist/3eb78a60b677c55480495de82d69c8bc.png" style="vertical-align: bottom;width: 18px;">
                        <span style="display: inline-block;height: 18px;vertical-align: bottom;">内部会员</span>
                    </div>
                </div>
                <div style="position: absolute;bottom: 10px;right: 10px;">
                    <Button>
                        <span>编辑个人资料</span>
                    </Button>
                </div>
            </div>
        </Card>
        <div style="margin-left: -8px;margin-right: -8px;margin-top: 16px;position: relative;">
            <div style="padding-left: 8px;padding-right: 8px;display: block;float: left;flex: 0 0 auto;position: relative;width: 100%">
                <Card style="padding-top: 4px;" dis-hover shadow>
                    <div style="padding: 0px;">
                        <Tabs value="name1">
                            <TabPane label="我的活动" name="name1">我的活动内容</TabPane>
                            <TabPane label="我的相册" name="name2">我的相册内容</TabPane>
                        </Tabs>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>