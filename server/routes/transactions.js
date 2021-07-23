const express = require('express')
const Transaction = require('../controllers/transactions')
const router = express.Router()

router.get('/', Transaction.getAll)

// for summary page
router.get('/category/:UserId', Transaction.getAllGroupedByCategory)
router.get('/date/:UserId', Transaction.getAllGroupedByDate)

// for analytics
router.get('/between/:UserId', Transaction.getBetweenTwoDates)
router.get('/between/:UserId/:type', Transaction.getBetweenTwoDatesByType)

// for summary page
router.get('/:UserId/:type', Transaction.getByType) // by income / by expense for each userId in a specific month
router.get('/:UserId', Transaction.getAllByUserId)

// for add/edit/delete
router.post('/:UserId', Transaction.postOne)
router.put('/:TransactionId', Transaction.putOne)
router.delete('/:TransactionId', Transaction.deleteOne)

module.exports = router