export default (answer) => {
    if (!answer.comment) {
        Vue.set(answer, 'comment', {
            'show': false,
            'total': 0,
            'list': []
        });
    }
    if (answer.comment.show) {
        answer.comment.show = false;
    } else {
        answer.comment.show = true;
        if (answer.comment.total == 0) {
            $.ajax({
                url: '/getcomment',
                type: 'POST',
                dataType: 'json',
                data: {
                    param1: 'value1'
                }
            })
            .done((data) => {
                answer.comment.list = data.list;
                answer.comment.total = data.total;
            });
        }
    }
}
