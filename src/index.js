import Vue from "vue";
import VueRouter from "vue-router";
import * as GoTop from "./module/go-top";
import Filter from "./filter/filter";

import app from "./index.vue";
import Question from './vue/question.vue';
import Answer from './vue/answer.vue';
import Topic from './vue/topic.vue';
import Feature from './vue/feature.vue';

import Mockjs from "mockjs";
import mockjsConfig from "./plugin/mockjs-config";

Filter();
mockjsConfig(Mockjs);

Vue.use(VueRouter);
Vue.use(GoTop);

var router = new VueRouter({
    hashbang: false,
    history: true,
    saveScrollPosition: true,
    suppressTransitionError: true
});

router.map({
    '/question/:id' : {
        name: "question",
        component: Question
    },
    '/answer/:id' : {
        name: "answer",
        component: Answer
    },
    '/topic/:id' : {
        name: "topic",
        component: Topic
    },
    '/feature/:id' : {
        name: "feature",
        component: Feature
    }
});

router.afterEach(() => {
    window.scrollTo(0, 0);
});
router.redirect({
    '*': '/topic/1'
});
router.alias({
    '/home': '/topic/1'
});
router.start(app, '#app');
