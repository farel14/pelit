const express = require('express')
const Transaction = require('../controllers/transactions')
const router = express.Router()

router.get('/', Transaction.getAll)
router.post('/', Transaction.postOne)
router.put('/:transactionId', Transaction.putOne)
router.delete('/:transactionId', Transaction.deleteOne)


module.exports = router