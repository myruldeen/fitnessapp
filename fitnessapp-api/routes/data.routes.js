'use strict'
const express = require('express');
const dataCtrl = require('../controllers/data.controller');

const router = express.Router();

router.route('/data/list')
  .get(dataCtrl.getList)

module.exports = router;