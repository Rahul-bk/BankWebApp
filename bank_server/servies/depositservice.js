const db = require("./registerservice");
const data = require("./db");
const { urlencoded } = require("express");

const Deposit = (accno, password, balance) => {
  var amount = parseInt(balance);

  return data.User.findOne({ accno, password }).then((user) => {
    if (user) {
      user.balance = Number(user.balance) + Number(balance);
      user.transaction.push({
        type: "deposit",
        amount: user.balance,
        message: "success",
      });
      user.save();
      return {
        statusCode: 200,
        status: true,
        message: "amount added successfully",
        amount: user.balance,
      };
    } else {
      return {
        statusCode: 422,
        status: false,
        message: "Invalid Accountnumber or Password",
      };
    }
  });
};

const Withdraw = (accno, password, balance) => {
  var amount = parseInt(balance);

  return data.User.findOne({ accno, password }).then((user) => {
    if (user) {
      if (user.balance >= balance) {
        user.balance = Number(user.balance) - Number(balance);
        user.transaction.push({
          type: "withdraw",
          amount: user.balance,
          message: "success",
          
        });
        user.save();
        return {
          statusCode: 200,
          status: true,
          message: "amount deducted successfully",
          amount: user.balance,
        };
      } else {
        return {
          statusCode: 422,
          status: false,
          message: "Insufficient balance",
        };
      }
    } else {
      return {
        statusCode: 422,
        status: false,
        message: "Invalid Accountnumber or Password",
      };
    }
  });
};

const transaction = (accno) => {
  return data.User.findOne({ accno }).then((user) => {
    if (user) {
      return {
        statusCode: 200,
        status: true,
        message: "Transaction History",
        transaction: user.transaction,
      };
    } else {
      return {
        statusCode: 422,
        status: true,
      };
    }
  });
};

module.exports = { Deposit, Withdraw, transaction };
