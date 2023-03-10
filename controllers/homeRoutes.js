const router = require('express').Router();
const { Blog, User, Employee } = require('../models')
const { withAuthorization, hasAuthorization } = require('../utils/authorization');

router.get('/', async (req, res) => {
try {
const blogData = await Blog.findAll({
attributes: [
    'id',
    'employee_id',
    'blog_text',
    'blog_date',
    'user_id'
],
include: [
    {
    model: User,
    attributes: ['name', 'id']
},
{
    model: employee,
    attributes: ['id', 'employee_name', 'blog_id'],
}]});

const blogs = blogData.map((project) => project.get({ plain: true }));

let formTitle = {
    title: 'Tech Blog'
}

console.log(blogs);

res.render('homepage', {
    formTitle,
    blogs,
    logged_In: req.session.loggedIn,
});
} catch (err) {
res.status(500).json(err);
}});

router.get('/login', hasAuthorization, (req, res) => {
let formTitle = {
    title: 'Login'
}
res.render('login', { formTitle });
});


router.get('/signup', (req, res) => {
let formTitle = {
    title: 'Signup'
}
res.render('signup',{ formTitle });
});

router.get('/dashboard', (req, res) => {
try {
let formTitle = {
    title: 'Dashboard'
}
res.render('dash',{
formTitle,
logged_In: req.session.loggedIn
});
} catch (err) {
res.status(500).json(err);
}});

module.exports = router;