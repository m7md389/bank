const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const transactionSchema = new Schema({
    amount: Number,
    category: String,
    vendor: String,
});

const Transaction = Mongoose.model("Transaction", transactionSchema)

module.exports = Transaction;