const { Blog } = require('../models');

const blogData = [
  {
    blog_text: 'I love computers',
    user_id: 1,
    ta_id: 1
  },
  {
    blog_text: 'The industrial revolution and its con....',
    user_id: 2,
  },
  {
    blog_text: 'Computers do not taste good with ketchup',
    user_id: 3,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);
module.exports = seedBlogs;