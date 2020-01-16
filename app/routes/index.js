/** @format */

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers');

router.get('/init', ctrl.init);
router.post('/create', ctrl.create);
router.get('/get', ctrl.get);

module.exports = router;
