const Transaction = require("../models/transHistoryModel")

const getAllTransactions = async (req, res) => {
    try {
        console.log("Handling getAllTransactions request");
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (err) {
        console.error("Error in getAllTransactions:", err);
        res.status(500).json({
            err: "Internal Server Error",
            details: err.message 
        });
    }
};

const getAllTransactionsbyId = async (req, res) => {
    try {
        const id = req.params.id;
        const transactions = await Transaction.findById({_id: id});
        res.json(transactions);
    } catch (err) {
        res.status(500).json({
            err: "Internal Server Error",
            details: err.message 
        });
    }
};


const createTransaction = async (req, res) => {
    try { 
        console.log("Request Body:", req.body);
        const newTransaction = await Transaction.create(req.body);
        res.status(201).json(newTransaction);
    } catch(err) {
        res.status(500).json ({
            err: "Internal Server Error",
            details: err.message 
        });
    }
};

const updateTransactionById = async (req, res) => {
    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true}
        );
        res.json(updatedTransaction);
    }catch (err) {
        res.status(500).json ({
            err: "Internal Server Error",
            details: err.message 
        });
    }
};

const deleteTransactionById = async (req, res) => {
    try {
        const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id);
        res.json(deletedTransaction)
    } catch (err) {
        res.status(500).json ({
            err: "Internal Server Error",
            details: err.message 
        });
    } 
};


module.exports = {
    getAllTransactions,
    getAllTransactionsbyId,
    createTransaction,
    updateTransactionById,
    deleteTransactionById
}