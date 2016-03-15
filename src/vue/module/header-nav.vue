

<template>

<header>
    <div class="logo"><a v-link="{ name: 'topic', params: { id: 1 } }"><i></i></a></div>
    <div class="open-app">
        <a href="javascript:;" @click="openApp"><i class="iconfont icon-shouji"></i><span>打开 App</span></a>
    </div>
</header>

</template>

<script>

import openApp from "../../module/open-app";
export default {
    methods: {
        openApp
    }
}

</script>
