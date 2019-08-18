const express = require('express');
const router = express.Router();

const ctrl =require('../controllers');

router.get('/init', ctrl.init);

module.exports = router;