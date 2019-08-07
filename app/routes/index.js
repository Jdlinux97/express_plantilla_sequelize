const express = require('express');
const router = express.Router();

const ctrl =require('../controlers');

router.post('/MI_RUTA', ctrl.my_controller);

module.exports = router;