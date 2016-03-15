<template>

<div class="body nt-topic">
    <div class="media">
        <div class="media-left"><img :src="topic.avatar" alt=""></div>
        <div class="media-right">
            <h4>{{ topic.title }}
                <span><i class="iconfont icon-guanzhu"></i><u>{{ topic.followerCount }} 人关注</u></span>
            </h4>
            <div class="media-text">
                {{{ topic.content }}}
            </div>
        </div>
    </div>
    <div class="tab">
        <a @click="setType('feed')" href="javascript:;" class="tab-link" :class="{'active': show == 'feed'}"><span>动态</span></a>
        <a @click="setType('perfect')" href="javascript:;" class="tab-link" :class="{'active': show == 'perfect'}"><span>精选</span></a>
    </div>
    <div v-show="show == 'feed'" data-topic-dom="feed" class="feed">
        <template v-for="list in feed.list">
            <feed-answer v-if="list.type == 'answer'" :answer="list"></feed-answer>
            <feed-question v-if="list.type == 'question'" :question="list"></feed-question>
        </template>
    </div>
    <div v-show="show == 'feed' && feed.total>feed.list.length" class="feed-load-more"><a @click="getFeed" href="javascript:;" class="">加载更多</a></div>
    <div v-show="show == 'perfect'" class="feed">
        <template v-for="list in perfect.list">
            <feed-answer v-if="list.type == 'answer'" :answer="list"></feed-answer>
            <feed-question v-if="list.type == 'question'" :question="list"></feed-question>
        </template>
    </div>
    <div v-show="show == 'perfect' && perfect.total>perfect.list.length" class="feed-load-more"><a @click="getPerfect" href="javascript:;">加载更多</a></div>
</div>
<div class="top hidden">
    <a v-gotop href="javascript:;"></a>
</div>

</template>

<script>
import scrollTab from "../module/scroll-tab";
import feedAnswer from "./module/feed-answer.vue";
import feedQuestion from "./module/feed-question.vue";
export default {
    data() {
        return {
            topicID: 0,
            show: "feed",
            feed: {
                page: 1,
                total: 0,
                list: []
            },
            perfect: {
                page: 1,
                total: 0,
                list: []
            },
            topic: {
                avatar: "",
                title: "",
                content: "",
                followerCount: 0
            }
        }
    },
    created() {
        this.getTopic();
        this.getFeed();
        this.getPerfect();
    },
    methods: {
        setType(type) {
            var headerTop = document.querySelector("header").offsetHeight;
            var introTop = document.querySelector(".media").offsetHeight;
            window.scrollTo(0, headerTop+introTop);
            this.show = type;
        },
        getTopic() {
            var self = this;
            var id = this.$route.params.id || 1;
            $.ajax({
                url: '/getTopic/' + id,
                type: 'POST',
                dataType: 'json',
                data: {
                    param1: 'value1'
                }
            })
            .done(data => {
                self.topic = data;
                self.$nextTick(() => scrollTab(self.$route.name));
            });
        },
        getFeed() {
            var self = this;
            $.ajax({
                url: '/getFeed',
                type: 'POST',
                dataType: 'json',
                data: {
                    page: self.feed.page
                }
            })
            .done(data => {
                self.feed.list = self.feed.list.concat(data.list);
                self.feed.total = data.total;
                self.feed.page++;
            });
        },
        getPerfect() {
            var self = this;
            $.ajax({
                url: '/getFeed',
                type: 'POST',
                dataType: 'json',
                data: {
                    page: self.perfect.page
                }
            })
            .done(data => {
                self.perfect.list = self.perfect.list.concat(data.list);
                self.perfect.total = data.total;
                self.perfect.page++;
            });
        }
    },
    components: {
        feedAnswer,
        feedQuestion
    },
    route: {
        data(transition) {
            console.log(transition)
        }
    }
}

</script>
