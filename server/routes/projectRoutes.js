const router = require('express').Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.getAll);
router.post('/', projectController.create);


module.exports = router;