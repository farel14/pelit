const express = require('express')
const router = express.Router()

let home = require('./home.js')
let user = require('./user.js')
let transactions = require('./transactions.js')
let target = require('./target.js')
let badge = require('./badge')
let achievement = require('./achievement')

router.use('/', home); // Login dan Register masuk ke route ini
router.use('/user', user); // Login dan Register masuk ke route ini
router.use('/transactions', transactions);
router.use('/target', target);
router.use('/badge', badge);
router.use('/achievement', achievement)

module.exports = router