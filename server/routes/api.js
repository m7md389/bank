const Express = require("express");
const Transaction = require("./../model/Transactrion");
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

module.exports = router;
