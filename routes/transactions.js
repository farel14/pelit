const express = require("express");
const Transaction = require("../controllers/transactions");
const router = express.Router();
const imageKit = require("../middlewares/imageKit");

const multer = require("multer");
const upload = multer();

// router.get('/', Transaction.getAll)

// for summary page
router.get("/category/:UserId/:month", Transaction.getAllGroupedByCategory);
router.get("/date/:UserId/:month", Transaction.getAllGroupedByDate);

// for edit page
router.get("/expense/:TransactionId", Transaction.getByTransactionId);

// for analytics
<<<<<<< HEAD
router.get('/between/:startDate/:endDate/:UserId/:type', Transaction.getBetweenTwoDatesByType)
router.get('/between/:startDate/:endDate/:UserId', Transaction.getBetweenTwoDates)
=======
router.get(
  "/between/:startDate/:endDate/:UserId/:type",
  Transaction.getBetweenTwoDatesByType
);
router.get(
  "/between/:startDate/:endDate/:UserId",
  Transaction.getBetweenTwoDates
);
>>>>>>> 892175bc44b3dbef85619df54928102010bd9874

// for summary page
router.get("/:UserId/:type", Transaction.getByType); // by income / by expense for each userId in a specific month
router.get("/:UserId", Transaction.getAllByUserId);

// for add/edit/delete
router.post(
  "/:UserId",
  upload.single("receiptImage"),
  imageKit,
  // tesseractMiddleware
  Transaction.postOne
);
router.put("/:TransactionId", Transaction.putOne);
router.delete("/:TransactionId", Transaction.deleteOne);

module.exports = router;
