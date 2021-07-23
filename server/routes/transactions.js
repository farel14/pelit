const express = require('express')
const Transaction = require('../controllers/transactions')
const router = express.Router()

router.get('/', Transaction.getAll)
router.get('/category/:month', Transaction.getByCategory)
router.get('/date/:month', Transaction.getByDate)
router.post('/', Transaction.postOne)
router.put('/:transactionId', Transaction.putOne)
router.delete('/:transactionId', Transaction.deleteOne)


module.exports = router