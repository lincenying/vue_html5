<template>
    <div>
        <header-nav></header-nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import headerNav from "./vue/module/header-nav.vue"
    export default {
        components: {
            headerNav
        }
    }
</script>
