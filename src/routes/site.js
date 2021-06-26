const express = require('express');
const router = express.Router();

const siteCotroller = require('../app/controllers/SiteController');

router.use('/search', siteCotroller.search);
router.use('/', siteCotroller.index);

module.exports = router;