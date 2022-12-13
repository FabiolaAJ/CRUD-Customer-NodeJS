const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/list', customerController.list);
router.post('/add', customerController.save);
router.put('/update', customerController.update);
router.delete('/delete/:id', customerController.delete);

module.exports = router;

