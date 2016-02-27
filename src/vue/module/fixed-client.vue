<template>
    <div v-if="fixedShow" class="fixed">
        <i @click="closeFixed" class="iconfont icon-sousuoguanbianniu"></i>
        <div class="ico"></div>
        <div class="intro">
            <p class="p1">奶糖客户端</p>
            <p class="p2">真实的女性时尚问答社区</p>
        </div>
        <div class="download">
            <a href="javascript:;" @click="openApp">立即下载</a>
        </div>
    </div>
</template>
<script>
    import openApp from "../../module/open-app";
    export default {
        data(){
            return {
                fixedShow: true
            }
        },
        methods: {
            openApp,
            closeFixed(){
                this.fixedShow = !this.fixedShow;
                $(".body").removeClass("nt-fixed");
            }
        }
    }
</script>
