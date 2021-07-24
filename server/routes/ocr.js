const express = require ('express')
const router = express.Router()
const OCRController = require('../controllers/ocrController')

router.post('/', OCRController.postOcr)

module.exports = router