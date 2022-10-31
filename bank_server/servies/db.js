// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const mongodb = "mongodb://127.0.0.1:27017/BANKAPP";

mongoose.connect(mongodb, {
  useNewUrlParser: true, //node=>mongodb
})

const User = mongoose.model("User",{
  
  username: String,
  accno: Number,
  password:String,
  balance: Number,
  transaction: Array,
  
})

module.exports={User}