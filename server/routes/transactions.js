const express = require('express')
const Transaction = require('../controllers/transactions')
const router = express.Router()

router.get('/', Transaction.getAll)
router.get('/category/:UserId', Transaction.getByCategory)
router.get('/date/:UserId', Transaction.getByDate)

router.get('/between/:UserId', Transaction.getBetweenTwoDates)
router.get('/:UserId', Transaction.getAllByUserId)
router.post('/:UserId', Transaction.postOne)
router.put('/:TransactionId', Transaction.putOne)
router.delete('/:TransactionId', Transaction.deleteOne)

module.exports = router