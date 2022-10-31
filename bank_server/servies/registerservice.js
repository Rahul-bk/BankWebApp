database = {
  // 1000:{accno:100,username:'rahul',password:'rahul123',balance:10000},
  // 2000:{accno:101,username:'rahu',password:'rahul1234',balance:20000},
  // 3000:{accno:102,username:'rah',password:'rahul12345',balance:12000}
};
const jwt = require("jsonwebtoken");
const db = require("./db");

const register = (username, accno, password, balance) => {
  return db.User.findOne({ accno }).then((user) => {
    if (user) {
      return {
        statusCode: 422,
        status: false,
        message: "already exists",
      };
    } else {
      const newUser = new db.User({
        username,
        accno,
        password,
        balance,
        transaction: [],
      });
      newUser.save();
      return {
        statusCode: 200,
        status: true,
        message: "Registered successfully",
      };
    }
  });
};

const loginService = (accno, password) => {
  return db.User.findOne({ accno, password }).then((user) => {
    if (user) {
      accountno = user.accno;
      username = user.username;
      const token = jwt.sign(
        {
          currentaccountno: accountno,
        },
        "supersecretkey@123"
      )

      return {
        statusCode: 200,
        status: true,
        message: "Login Successfully",
        token,
        currentaccountno: accountno,
        username: username,
      };
    } else {
      return {
        statusCode: 422,
        status: false,
        message: "Incorrect password",
      };
    }
  });
};

  const deleteaccount=(accno)=>{
  return db.User.deleteOne({accno})
  .then(user=>{
    if(user){
      return{
        status:true,
        message:"done",
        statusCode:200
      }
    }else{
      return{
        status:false,
        message:"error",
        statusCode:422
      }
    }
  })
}

module.exports = { register, loginService, database ,deleteaccount};
