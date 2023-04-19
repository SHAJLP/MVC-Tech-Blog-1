const { Comment } = require('../models');

const commentData = [{
        comment_text: "Is there life after death?.",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "Is it ok to be selfish?",
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: "Why you should do less",
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "Is chatgpt going to kill us?.",
        user_id: 4,
        post_id: 5
    },
    {
        comment_text: "How to handle stress",
        user_id: 5,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;