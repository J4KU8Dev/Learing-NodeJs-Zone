const path = require('path');

const express = require('express');

const productControllers = require('../controlers/products');

const router = express.Router();

router.get('/', productControllers.getProducts);

module.exports = router;
