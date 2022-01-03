import React, { Component } from "react";

function Balance({ balance }) {
  function getAmountClasses() {
    if (balance > 500) return "positive";
    return "negative";
  }

  return (
    <div className="balance-container">
      <h1>
        Balance: <span className={getAmountClasses()}>{balance}</span>
      </h1>
    </div>
  );
}

export default Balance;
