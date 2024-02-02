const express = require('express');
const router = express.Router();
const transHistoryController = require('../controllers/transHistoryController');

router.get('/trans_history', transHistoryController.getAllTransactions);
router.get('/trans_history/:id', transHistoryController.getAllTransactionsbyId);
router.post('/trans_history', transHistoryController.createTransaction);
router.put('/trans_history/:id', transHistoryController.updateTransactionById);
router.delete('/trans_history/:id', transHistoryController.deleteTransactionById);

module.exports = router;
