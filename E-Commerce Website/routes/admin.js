const express = require('express');
const path = require('path')
const router =express.Router();
const rootDir = require('../utils/path');
const productData = require('../utils/products')  //require for storing the user i/p data
const {getAddProductPage, postAddProductPage} = require('../controllers/admin/ProductController')



router.get('/add',getAddProductPage)

router.post('/add',postAddProductPage)


module.exports = router;