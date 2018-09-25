<template>
    <div>
        内容：
        <Editor v-model="content"/>
    </div>
</template>

<script>
    export default {
        components: {
            Editor: resolve => resolve(require('../../../components/wangeditor.vue'))
        }
    }
</script>
