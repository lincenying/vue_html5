module.exports = function(Mock) {
    Mock.mock(/\/getTopic\/([\d]+)/, {
        'avatar': '@image(100x100)',
        'content': '@cword(10, 50)',
        'title': '@cword(2,4)',
        'followerCount': '@integer(10, 20)'
    });
    Mock.mock(/\/getUser/, {
        'total': '@integer(20, 50)',
        'list|10': [{
            'avatar': '@image(100x100)',
            'name': '@cword(2,4)',
            'followerCount': '@integer(10, 20)',
            'answerCount': '@integer(10, 20)'
        }]
    });
    Mock.mock(/\/getFeed/, {
        'status': true,
        'total': '@integer(20, 50)',
        'list|10': [{
            'id|+1': 1,
            'type|1': ['question', 'answer'],
            'title': '@cword(10, 15)',
            'avatar': '@image(100x100)',
            'followerCount': '@integer(10, 20)',
            'agreeCount': '@integer(10, 20)',
            'answerCount': '@integer(10, 20)',
            'commentCount': '@integer(10, 20)',
            'content': '@csentence(300, 500)',
            'comment': {
                'show': false,
                'total': 0,
                'list': []
            }
        }]
    });
    Mock.mock(/\/related/, {
        'status': true,
        'total': 5,
        'list|5': [{
            'id|+1': 1,
            'title': '@cword(10, 15)',
            'answerCount': '@integer(10,20)'
        }]
    });
    Mock.mock(/\/getcomment/, {
        'status': true,
        'total': 10,
        'list|10': [{
            'id|+1': 1,
            'avatar': '@image(100x100)',
            'content': '@cword(10, 50)',
            'name': '@cname()'
        }]
    });
    Mock.mock(/\/getQuestion/, {
        'status': true,
        'total': 10,
        'question': {
            'title': '@ctitle(5, 15)',
            'content': '@csentence(30, 100)',
            'answerCount': '@integer(10, 20)',
            'followerCount': '@integer(10, 20)'
        },
        'answer|5-10': [{
            'id|+1': 1,
            'user': {
                'avatar': '@image(100x100)',
                'name': '@cname()',
                'headline': '@cword(5, 15)'
            },
            'agreeCount': '@integer(10, 20)',
            'commentCount': '@integer(10, 20)',
            'content': '@csentence(300, 500)',
            'isopen': false
        }]
    });
};
