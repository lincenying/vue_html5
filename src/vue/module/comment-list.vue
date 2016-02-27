

<template>

<div v-if="comment && comment.show && comment.total>0" class="data-comment" data-comment>
    <div class="comment-ul">
        <div v-for="list in comment.list" class="comment-li">
            <div class="avatar"><img :src="list.avatar" alt=""></div>
            <div class="intro">
                <p class="name">{{ list.name }}</p>
                <div class="comment-content">
                    {{ list.content }}
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {
    props: ['comment']
}

</script>
