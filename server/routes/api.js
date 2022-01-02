import Express from "express";
import Transaction from "./../model/Transactrion";
import Transaction from "./../../src/components/Transaction";
const router = Express.Router();

router.get("/transactrions", (req, res) => {
  const transactions = Transaction.find({});
  res.send(transactions);
});

router.post("/transaction", (req, res) => {
  const { amount, category, vendor } = req.body;
  const transaction = new Transaction({ amount, category, vendor });
  transaction.save();
  res.send("Added");
});

router.delete("/transaction", (req, res) => {
  const { amount, category, vendor } = req.body;
  Transaction.findOneAndDelete({ amount, category, vendor });
  res.send("Deleted");
});

export default router;
