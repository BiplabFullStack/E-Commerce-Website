const express = require('express');
const path = require('path');
const router =express.Router();
const rootDir = require('../utils/path');
const productsData = require('../utils/products')

const {getHomePage} = require('../controllers/admin/HomeControllers')

router.get('/', getHomePage)

module.exports = router;