<template>
    <div class="client">
        <div class="ico"></div>
        <div class="intro">
            <p class="p1">奶糖客户端</p>
            <p class="p2">真实的女性时尚问答社区</p>
            <p class="p3"><a href="javascript:;" @click="openApp($event)">查看详情</a></p>
        </div>
    </div>
</template>
<script>
import openApp from "../../module/open-app";
export default {
    methods: {
        openApp
    }
}
</script>
