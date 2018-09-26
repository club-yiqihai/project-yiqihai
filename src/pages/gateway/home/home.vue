<style scoped>
    .box-flex .imgpic {
        transition: .7s all;
        opacity: 0.8;
    }
    .box-flex .imgpic:hover { opacity: 1; box-shadow: 1px 1px 20px #333;
    transform:scale(1.1,1.1);cursor: pointer; }
    .lineThrou{transition: .8s all;}
    .lineThrou:hover{text-decoration:line-through;cursor: pointer}
</style>
<template>
    <div>
        <div class="box-flex flex-direction-column margin-top-2">
            <div class="box-flex margin-auto" style="width: 80%;">
                <div class="box-flex" style="width: 100%"> 
                    <div class="flex-1" style="display: inline-block; width: 50%">
                        <img class="images-con imgpic" style="width: 594px; height: 247px;"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531879439&di=dc3995dada9cd801b61ab08ac0725bab&imgtype=jpg&er=1&src=http%3A%2F%2Fimage13.m1905.cn%2Fuploadfile%2F2013%2F0830%2F20130830104458947.jpg" >
                    </div>
                    <div class="box-flex flex-1 padding-all flex-direction-column" style="display: inline-block;width: 50%">
                        <span class="tirtleFont lineThrou">简介</span>
                        <span class="contentFont">人生简介</span>
                    </div>
                </div>

                <div class="box-flex width-100" style="width: 100%"> 
                    <div class="box-flex flex-1 padding-all flex-direction-column" style="display: inline-block;width: 50%">
                        <span class="tirtleFont lineThrou">生活态度</span>
                        <span class="contentFont">I like you, but just like you ...</span>
                    </div>
                    <div class="flex-1" style="display: inline-block; width: 50%">
                        <img class="images-con imgpic" style="width: 594px; height: 247px;"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531284973210&di=044ada63204de3e16c7c1458461aec40&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D711675078%2C185265168%26fm%3D214%26gp%3D0.jpg" >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
            }
        },
        mounted(){
        },
        watch: {
        },
        methods: {
        }
    };
</script>