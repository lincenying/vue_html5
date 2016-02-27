<template>
    <div class="body nt-feature">
        <div class="feature-info">
            <div class="feature-intro-img"><img :src="feature.avatar"></div>
            <h4 class="feature-intro-title">{{ feature.title }}</h4>
            <p class="feature-intro-content">{{ feature.content }}</p>
        </div>
        <div class="tab">
            <a @click="setType('feed')" href="javascript:;" class="tab-link" :class="{'active': show == 'feed'}"><span>内容</span></a>
            <a @click="setType('user')" href="javascript:;" class="tab-link" :class="{'active': show == 'user'}"><span>造物主</span></a>
        </div>
        <div v-show="show == 'feed'" class="feed">
            <template v-for="list in feed.list">
                <feed-answer v-if="list.type == 'answer'" :answer="list"></feed-answer>
                <feed-question v-if="list.type == 'question'" :question="list"></feed-question>
            </template>
        </div>
        <div v-show="show == 'feed' && feed.total>feed.list.length" class="feed-load-more"><a @click="getFeed" href="javascript:;">加载更多</a></div>
        <div v-show="show == 'user'" class="creator">
            <template v-for="list in users.list">
                <user-list :user="list"></user-list>
            </template>
        </div>
        <div v-show="show == 'user' && users.total>users.list.length" class="feed-load-more"><a @click="getUser" href="javascript:;">加载更多</a></div>
    </div>
    <div class="top hidden">
        <a v-gotop href="javascript:;"></a>
    </div>
</template>
<script>
import scrollTab from "../module/scroll-tab";
import feedAnswer from "./module/feed-answer.vue";
import feedQuestion from "./module/feed-question.vue";
import userList from "./module/user-list.vue";
export default {
    data(){
        return {
            featureID: 0,
            show: "feed",
            feed: {
                page: 1,
                total:0,
                list: []
            },
            users: {
                page: 1,
                total:0,
                list: []
            },
            feature: {
                avatar: "",
                title: "",
                content:""
            }
        }
    },
    created () {
        this.getFeature();
        this.getFeed();
        this.getUser();
    },
    methods:{
        setType(type) {
            this.show = type;
        },
        getFeature(){
            var self = this;
            $.ajax({
                url: '/getTopic',
                type: 'POST',
                dataType: 'json',
                data: {param1: 'value1'}
            })
            .done((data) => {
                self.feature = data;
                self.$nextTick(() => scrollTab(self.$route.name));
            });
        },
        getFeed(){
            var self = this;
            $.ajax({
                url: '/getFeed',
                type: 'POST',
                dataType: 'json',
                data: {page: self.feed.page}
            })
            .done((data) => {
                self.feed.list = self.feed.list.concat(data.list);
                self.feed.total = data.total;
                self.feed.page++;
            });
        },
        getUser(){
            var self = this;
            $.ajax({
                url: '/getUser',
                type: 'POST',
                dataType: 'json',
                data: {page: self.users.page}
            })
            .done((data) => {
                self.users.list = self.users.list.concat(data.list);
                self.users.total = data.total;
                self.users.page++;
            });
        }
    },
    components: {
        feedAnswer,
        feedQuestion,
        userList
    }
}
</script>
