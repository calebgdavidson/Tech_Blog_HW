const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const router = require('express').Router();
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;