const express = require('express');
const router = express.Router();

const newsCotroller = require('../app/controllers/NewsController');

router.use('/:slug', newsCotroller.detail);
router.use('/', newsCotroller.index);

module.exports = router;