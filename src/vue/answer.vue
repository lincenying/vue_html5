

<template>

<div class="body nt-answer nt-fixed">
    <div class="question">
        <div class="title" v-text="answers.question.title"></div>
        <div class="content">{{{ answers.question.content }}}</div>
    </div>
    <div class="all-question">
        <a v-link="{ name: 'question', params: { id: 123 } }"><i class="iconfont icon-wendang02"></i><span>查看全部回答</span></a>
    </div>
    <template v-for="answer in answers.answer">
        <div class="answer">
            <div class="user">
                <div class="avatar"><img :src="answer.user.avatar" alt=""></div>
                <div class="info">
                    <p class="name">{{ answer.user.name }}</p>
                    <p class="bio">{{ answer.user.headline }}</p>
                </div>
            </div>
            <div class="content">
                <template v-if="answer.isopen || $index == 0">
                    {{{ answer.content }}}
                </template>
                <template v-else>
                    {{ answer.content | cutDesc }}<a class="show-more" @click="showMore(answer)" href="javascript:;">展示全部</a>
                </template>
            </div>
            <div class="foot">
                <span class="agree"><i class="iconfont icon-good"></i><span>{{ answer.agreeCount }} 赞</span></span>
                <span class="comment"><a @click="showComment(answer)" href="javascript:;"><i class="iconfont icon-pinglun"></i><span>{{ answer.comment && answer.comment.show ? '收起评论' : answer.commentCount + ' 评论' }}</span></a>
                </span>
            </div>
        </div>
        <comment-list :comment="answer.comment"></comment-list>
        <div v-if="$index == 0" class="more-answer">
            <span>更多答案</span>
        </div>
    </template>
    <div class="all-question all-question-2">
        <a v-link="{ name: 'question', params: { id: 123 } }"><i class="iconfont icon-wendang02"></i><span>查看全部回答</span></a>
    </div>
    <div class="related">
        <div class="title">相关问题</div>
        <ul>
            <related-question></related-question>
        </ul>
    </div>
    <page-client></page-client>
</div>
<div class="top hidden">
    <a v-gotop href="javascript:;"></a>
</div>
<fixed-client></fixed-client>

</template>

<script>
import scrollTab from "../module/scroll-tab";
import openApp from "../module/open-app";
import showComment from "../module/show-comment";
import fixedClient from "./module/fixed-client.vue";
import pageClient from "./module/page-client.vue";
import commentList from "./module/comment-list.vue";
import relatedQuestion from "./module/related-question.vue";
export default {
    data() {
        return {
            answers: {
                question: {
                    title: "",
                    content: ""
                }
            }
        }
    },
    created() {
        var self = this;
        var id = this.$route.params.id;
        $.ajax({
                url: '/getQuestion/' + id,
                type: 'POST',
                dataType: 'json',
                data: {
                    param1: 'value1'
                }
            })
            .done((data) => {
                self.answers = data;
                self.$nextTick(() => scrollTab(self.$route.name));
            });
    },
    methods: {
        openApp,
        showComment,
        showMore(answer) {
            answer.isopen = !answer.isopen;
        }
    },
    components: {
        fixedClient,
        pageClient,
        commentList,
        relatedQuestion
    },
    route: {
        data(transition) {
            console.log(transition)
        }
    }
}

</script>
