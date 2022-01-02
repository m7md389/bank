import Mongoose from "mongoose"
const Schema = Mongoose.Schema

const transactionSchema = new Schema({
    abount: Number,
    category: String,
    vendor: String,
})

const Transaction = Mongoose.model("Transaction", transactionSchema)

export default Transaction