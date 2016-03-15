<template>
    <div class="body nt-answer nt-fixed">
        <div class="question">
            <div class="title" v-text="answers.question.title"></div>
            <div class="content">{{{ answers.question.content }}}</div>
        </div>
        <div class="count-follow">
            <div class="answer-count">
                <i class="iconfont icon-wendang01"></i><span>{{ answers.question.answerCount }} 回答</span>
            </div>
            <div class="answer-follow">
                <i class="iconfont icon-guanzhu"></i><span>{{ answers.question.followerCount }} 关注</span>
            </div>
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
                    <template v-if="!answer.isopen">
                        {{ answer.content | cutDesc }}<a class="show-more" @click="showMore(answer)" href="javascript:;">展示全部</a>
                    </template>
                    <template v-else>
                        {{{ answer.content }}}
                    </template>
                </div>
                <div class="foot">
                    <span class="agree"><i class="iconfont icon-good"></i><span>{{ answer.agreeCount }} 赞</span></span>
                    <span class="comment"><a @click="showComment(answer)" href="javascript:;"><i class="iconfont icon-pinglun"></i><span>{{ answer.comment && answer.comment.show ? '收起评论' : answer.commentCount + ' 评论' }}</span></a></span>
                </div>
            </div>
            <comment-list :comment="answer.comment"></comment-list>
        </template>
        <div class="go-app">
            <a href="javascript:;" @click="openApp">去 App 查看更多回答</a>
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
export default {
        data(){
            return {
                answers: {
                    question: {
                        title: "",
                        content:"",
                        answerCount:0,
                        followerCount:0,
                    }
                }
            }
        },
        created() {
            var self = this;
            $.ajax({
                url: '/getQuestion',
                type: 'POST',
                dataType: 'json',
                data: {param1: 'value1'}
            })
            .done((data) => {
                self.answers = data;
                self.$nextTick(() => scrollTab(self.$route.name));
            });

        },
        methods:{
            openApp,
            showComment,
            showMore(answer) {
                answer.isopen = !answer.isopen;
            }
        },
        components: {
            fixedClient,
            pageClient,
            commentList
        }
    }
</script>
