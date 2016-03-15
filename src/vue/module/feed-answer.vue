<template>
    <div class="feed-list">
        <div class="feed-title"><a v-link="{ name: 'question', params: { id: answer.id } }">{{ answer.title }}</a></div>
        <div class="feed-content">
            <a v-link="{ name: 'answer', params: { id: answer.id } }">
                <div class="feed-image"><img :src="answer.avatar" width="60" height="60"></div>
                <div class="feed-text">{{ answer.content }}</div>
                <div class="clear"></div>
            </a>
        </div>
        <div class="feed-foot">
            <span class="agree"><i class="iconfont icon-good"></i><span>{{ answer.agreeCount }} 赞</span></span>
            <span class="comment">
                <a @click="showComment(answer)" href="javascript:;"><i class="iconfont icon-pinglun"></i><span>{{ answer.comment.show ? '收起评论' : answer.commentCount + ' 评论' }}</span></a>
            </span>
        </div>
    </div>
    <comment-list :comment="answer.comment"></comment-list>
</template>
<script>
    import showComment from "../../module/show-comment.js";
    import commentList from "./comment-list.vue";
    export default {
        props: ['answer'],
        methods: {
            showComment
        },
        components: {
            commentList
        }
    }
</script>
