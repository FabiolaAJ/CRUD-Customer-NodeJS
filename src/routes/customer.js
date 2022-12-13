const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/list', customerController.list);
router.post('/add', customerController.save);
router.post('/update', customerController.update);
router.get('/delete', customerController.delete);

module.exports = router;

