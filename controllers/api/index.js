const api = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
api.use('/users', userRoutes);
api.use('/blogs', blogRoutes);

module.exports = api;