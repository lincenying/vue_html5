<template>
    <div class="feed-list">
        <div class="feed-title"><a v-link="{ name: 'question', params: { id: question.id } }">{{ question.title }}</a></div>
        <div class="feed-foot">
            <span class="agree"><i class="iconfont icon-good"></i><span>{{ question.followerCount }} 关注</span></span>
            <span class="comment"><i class="iconfont icon-pinglun"></i><span>{{ question.answerCount }} 回答</span></span>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['question']
    }
</script>
