import React from "react";
import Transaction from "./Transaction";

function CatigoriesOfTransactions({ transactions, onDelete }) {
  const catigorized = {};

  transactions.forEach((transaction) => {
    if (!catigorized[transaction.category])
      catigorized[transaction.category] = 0;
    catigorized[transaction.category] += transaction.amount;
  });

  function getAmountClasses(amount) {
    if (amount > 0) return "positive";
    return "negative";
  }

  return (
    <div className="categories-container">
      {Object.keys(catigorized).map((category) => (
        <div key={category} className="category-container">
          <h1>{category}</h1>
          <h4>
            Amount:{" "}
            <span className={getAmountClasses(catigorized[category])}>
              {" "}
              {catigorized[category]}{" "}
            </span>
          </h4>
        </div>
      ))}
    </div>
  );
}

export default CatigoriesOfTransactions;
