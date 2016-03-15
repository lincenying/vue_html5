<template>
    <div class="creator-list">
        <div class="avatar"><img :src="user.avatar" alt=""></div>
        <div class="intro">
            <p class="name">{{ user.name }}</p>
            <!-- architect.verifiedName, architect.level -->
            <p class="text">{{ user.answerCount }} 回答 / {{ user.followerCount }} 粉丝</p>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['user']
    }
</script>
