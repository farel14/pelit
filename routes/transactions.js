const express = require("express");
const Transaction = require("../controllers/transactions");
const router = express.Router();
const imageKit = require("../middlewares/imageKit");

const multer = require("multer");
const upload = multer();

// router.get('/', Transaction.getAll)

// for summary page
router.get('/category/:UserId', Transaction.getAllGroupedByCategory)
router.get('/date/:UserId', Transaction.getAllGroupedByDate)

// for edit page
router.get('/expense/:TransactionId', Transaction.getByTransactionId)

// for analytics
router.get('/between/:UserId/:type', Transaction.getBetweenTwoDatesByType)
router.get('/between/:UserId', Transaction.getBetweenTwoDates)

// for summary page
router.get('/:UserId/:type', Transaction.getByType) // by income / by expense for each userId in a specific month
router.get('/:UserId', Transaction.getAllByUserId)

// for add/edit/delete
router.post(
  "/:UserId",
  upload.single("receiptImage"),
  imageKit,
  Transaction.postOne
);
router.put("/:TransactionId", Transaction.putOne);
router.delete("/:TransactionId", Transaction.deleteOne);

module.exports = router;
