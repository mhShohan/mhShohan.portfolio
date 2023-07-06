const router = require('express').Router();

router.use('/projects', require('./projectRoutes'));


module.exports = router;