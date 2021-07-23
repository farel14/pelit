const express = require('express')
const Transaction = require('../controllers/transactions')
const router = express.Router()

router.get('/', Transaction.getAll)
router.post('/', Transaction.postOne)
router.get('/:UserId', Transaction.getById)
router.put('/:TransactionId', Transaction.putOne)
router.delete('/:TransactionId', Transaction.deleteOne)


module.exports = router