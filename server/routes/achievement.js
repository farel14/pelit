const express = require ('express')
const router = express.Router()
const Controller = require('../controllers/controllerAchievement.js')

router.post('/:userId/:badgeId', Controller.addAchievement)

module.exports = router