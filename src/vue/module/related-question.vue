<template>
    <li v-for="list in related.list"><a v-link="{ name: 'question', params: { id: 123 } }">{{ list.title }}</a><span>{{ list.answerCount }} 个回答</span></li>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                related: []
            }
        },
        created() {
            var self = this;
            $.ajax({
                url     : '/related',
                type    : 'POST',
                dataType: 'json',
                data    : {
                    param1: 'value1'
                }
            }).done((data) => self.related = data);
        }
    }
</script>
