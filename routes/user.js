const express = require ('express')
const router = express.Router()
const Controller = require('../controllers/controllerUser.js')

router.get('/:userId', Controller.getUserById)

module.exports = router