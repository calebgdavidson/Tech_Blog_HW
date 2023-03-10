const router = require('express').Router();
const { Blog, User, Employee } = require('../../models');
const withAuthorization = require('../../utils/authorization');

router.get('/', (req, res) => {
Blog.findAll({
    attributes: [
    'id',
    'employee_id',
    'blog_text',
    'blog_date',
    'user_id'],
include: [
{
    model: Employee,
    attributes: ['id', 'employee_name', 'blog_id', ],
},
{
    model: User,
    attributes: ['name', 'id']
}
]
})
.then(dbBlogData => res.json(dbBlogData))
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

router.get('/:id', (req, res) => {
Blog.findOne({
    where: {
    id: req.params.id
},
attributes: [
    'id',
    'employee_id',
    'blog_text',
    'blog_date',
    'user_id'
],
include: [
{
    model: Employee,
    attributes: ['id', 'employee_name', 'blog_id', ],
},
{
    model: User,
    attributes: ['name', 'id']
}
]})
.then(dbBlogData => {
if (!dbBlogData) {
    res.status(404).json({ message: 'No blog found with this id' });
    return;
    }
    res.json(dbBlogData);
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

router.blog('/', (req, res) => {
Blog.create({
    employee_id: req.body.employee_id,
    blog_text: req.body.blog_text,
    blog_date: req.body.blog_date,
    user_id: req.body.user_id
})
.then(dbBlogData => res.json(dbBlogData))
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

router.delete('/:id', (req, res) => {
Blog.destroy({
    where: {
    id: req.params.id
}
})
.then(dbBlogData => {
if (!dbBlogData) {
    res.status(404).json({ message: 'No blog found with this id' });
    return;
}
res.json(dbBlogData);
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});
module.exports = router;