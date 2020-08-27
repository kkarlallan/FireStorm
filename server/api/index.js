var express = require('express');
var router = express.Router();

router.use('/api/user', require('./user.js'));
// router.use('/api/cart', require('./cart'))
// router.use('/api/product', require('./product'))
// router.use('/api/category', require('./category'))

module.exports = router;