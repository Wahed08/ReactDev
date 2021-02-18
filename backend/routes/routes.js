const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.post('/add',controller.create_register);
router.get('/',controller.get_register);

module.exports = router;